import { Warning } from "postcss";
import MiLenguajeVisitor from "../../grammar/MiLenguajeVisitor.js";

export default class CustomVisitor extends MiLenguajeVisitor {
  constructor() {
    super();
    this.memoria = new Map();
    this.mensajes = [];
    this.variabless = new Set(); // Almacenar los mensajes
  }

  // Visit a parse tree produced by MiLenguajeParser#start.
  visitStart(ctx) {
    this.visitChildren(ctx);
    return this.mensajes;
  }

  visitDeclaracion(ctx) {
    const id = ctx.ID().getText();
    const dato = ctx.rw().getText(); //Es para obtener y decir que tipo de dato sera 
    const value = null; // Sin asignaciones

    //Aqui verificaremos si la variable ya fue declarada 
    if (this.variabless.has(id)){
      this.mensajes.push(`ALERTA: Está variable '${id}' ya fue delcarada`); 
    } else{
      this.variabless.add(id);
      this.memoria.set(id, {dato, value}); //Aqui vamos almacenar el tipo valor 
      this.mensajes.push(`EXCELENTE: variable '${id}' declarada, te faltan asignaciones`);
    }
    return null;
  }
    
    
  visitAssignacion(ctx) {
    const id = ctx.ID().getText(); 
    const dato = ctx.rw().getText(); //Es para obtener y decir que tipo de dato sera 
  
    //preguntaremos si el dato ingresado es de tipo INT (conejo)
    if (dato == 'conejo'){
      const value = this.visit (ctx.expr());
      if(!isNaN(value)){
        this.memoria.set(id,{dato: 'conejo', valor: value});
        this.mensajes.push(`${id} = ${value}`);
      }else{
        this.mensajes.push(`ALERTA: NO puedes asignar letras, solo numeros '${id}'`);
      }
    }
  
    return null;
}

  // Visit a parse tree produced by MiLenguajeParser#idValue.
  visitIdValue(ctx) {
    const id = ctx.ID().getText();
    if (!this.memoria.has(id)) {
      console.log(`Variable "${id}" no ha sido inicializada`);
    }
    return this.memoria.get(id);
  }

  // Visit a parse tree produced by MiLenguajeParser#numberValue.
  visitNumberValue(ctx) {
    return parseInt(ctx.NUMBER().getText());
  }

  // Visit a parse tree produced by MiLenguajeParser#stringValue.
  visitStringValue(ctx) {
    return ctx.STRING().getText();
  }
  
  // Visit a parse tree produced by MiLenguajeParser#mulDivExpr.
  visitMulDivExpr(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op.text;

    if (op === '*') {
      return left * right;
    } else if (op === '/') {
      return left / right;
    }
  }

  // Visit a parse tree produced by MiLenguajeParser#addSubExpr.
  visitAddSubExpr(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op.text;

    if (op === '+') {
      return left + right;
    } else if (op === '-') {
      return left - right;
    }
  }

  // Visit a parse tree produced by MiLenguajeParser#parensExpr.
  visitParensExpr(ctx) {
    const num = this.visit(ctx.expr(0));
    return num;
  }

  // Visit a parse tree produced by MiLenguajeParser#idExpr.
  visitIdExpr(ctx) {
    const id = ctx.ID().getText();
    if (!this.memoria.has(id)) {
      this.mensajes.push(`Variable "${id}" no ha sido inicializada`);
    } else {
      console.log(`Variable '${id}' inicializada`);
    }
    return this.memoria.get(id);
}


  // Visit a parse tree produced by MiLenguajeParser#numberExpr.
  visitNumberExpr(ctx) {
    return parseFloat(ctx.getText());
  }

  // Visit a parse tree produced by MiLenguajeParser#idExpr.
	visitIdExpr(ctx) {
	  const id = ctx.ID().getText();
    return id;
	}
}