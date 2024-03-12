/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
 import antlr4 from "antlr4";

 import MiLenguajeLexer from "../../grammar/MiLenguajeLexer.js";
 import MiLenguajeParser from "../../grammar/MiLenguajeParser.js";
 import CustomVisitor from "../helper/CustomVisitor.js";
 
 export const traducir = (input) => {
   const limpiarInput = input.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, '');
   console.log("Recibido.",limpiarInput);
   const chars =new antlr4.InputStream(limpiarInput);
   const lexer = new MiLenguajeLexer(chars);
   const tokens = new antlr4.CommonTokenStream(lexer);
   const parser = new MiLenguajeParser(tokens);
   const errorListener = new CustomErrorListener();
   parser.removeErrorListeners();
   parser.addErrorListener(errorListener);
   parser.buildParseTrees = true;
   const tree = parser.start(); //inicio de la gramatica
   const customVisitor = new CustomVisitor();
   const errores = errorListener.errors.map(error => `ERROR ${error.line}:${error.column} ${error.msg}`);
   console.log(errores);
   const mensajes = errores.length === 0 ?
   customVisitor.visitStart(tree):[];
   console.log("Resultados:",resultado.join('\n'));
   return { resultado, errores }; 
 };

 class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
      super();
      this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      this.errors.push({ line, column, msg });
  }
}
