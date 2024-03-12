// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,19,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,53,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,
61,8,5,10,5,12,5,64,9,5,1,6,1,6,1,6,0,1,10,7,0,2,4,6,8,10,12,0,3,1,0,7,8,
1,0,9,10,1,0,12,15,67,0,14,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,33,1,0,0,
0,8,39,1,0,0,0,10,52,1,0,0,0,12,65,1,0,0,0,14,15,5,11,0,0,15,19,5,1,0,0,
16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,
22,1,0,0,0,21,19,1,0,0,0,22,23,5,2,0,0,23,1,1,0,0,0,24,28,3,4,2,0,25,28,
3,6,3,0,26,28,3,8,4,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,1,0,
0,0,29,30,3,12,6,0,30,31,5,16,0,0,31,32,5,3,0,0,32,5,1,0,0,0,33,34,3,12,
6,0,34,35,5,16,0,0,35,36,5,4,0,0,36,37,3,10,5,0,37,38,5,3,0,0,38,7,1,0,0,
0,39,40,3,12,6,0,40,41,5,5,0,0,41,42,5,16,0,0,42,43,5,6,0,0,43,44,5,3,0,
0,44,9,1,0,0,0,45,46,6,5,-1,0,46,47,5,5,0,0,47,48,3,10,5,0,48,49,5,6,0,0,
49,53,1,0,0,0,50,53,5,16,0,0,51,53,5,17,0,0,52,45,1,0,0,0,52,50,1,0,0,0,
52,51,1,0,0,0,53,62,1,0,0,0,54,55,10,5,0,0,55,56,7,0,0,0,56,61,3,10,5,6,
57,58,10,4,0,0,58,59,7,1,0,0,59,61,3,10,5,5,60,54,1,0,0,0,60,57,1,0,0,0,
61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,11,1,0,0,0,64,62,1,0,0,0,65,
66,7,2,0,0,66,13,1,0,0,0,5,19,27,52,60,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'{'", "'}'", "';'", "'='", "'('", "')'", 
                            "'*'", "'/'", "'+'", "'-'", "'perro'", "'rana'", 
                            "'conejo'", "'avestruz'", "'huron'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "PERRO", "FLOAT", "INT", 
                             "VAR", "PRINT", "ID", "NUMBER", "STRING", "WS" ];
    static ruleNames = [ "start", "stat", "declaration", "assignation", 
                         "impri", "expr", "rw" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(MiLenguajeParser.PERRO);
	        this.state = 15;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 16;
	            this.stat();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(MiLenguajeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_stat);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.assignation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.impri();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_declaration);
	    try {
	        localctx = new DeclaracionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.rw();
	        this.state = 30;
	        this.match(MiLenguajeParser.ID);
	        this.state = 31;
	        this.match(MiLenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignation() {
	    let localctx = new AssignationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_assignation);
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.rw();
	        this.state = 34;
	        this.match(MiLenguajeParser.ID);
	        this.state = 35;
	        this.match(MiLenguajeParser.T__3);
	        this.state = 36;
	        this.expr(0);
	        this.state = 37;
	        this.match(MiLenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impri() {
	    let localctx = new ImpriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_impri);
	    try {
	        localctx = new ImprimirContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.rw();
	        this.state = 40;
	        this.match(MiLenguajeParser.T__4);
	        this.state = 41;
	        this.match(MiLenguajeParser.ID);
	        this.state = 42;
	        this.match(MiLenguajeParser.T__5);
	        this.state = 43;
	        this.match(MiLenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, MiLenguajeParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new ParensExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 46;
	            this.match(MiLenguajeParser.T__4);
	            this.state = 47;
	            this.expr(0);
	            this.state = 48;
	            this.match(MiLenguajeParser.T__5);
	            break;
	        case 16:
	            localctx = new IdExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(MiLenguajeParser.ID);
	            break;
	        case 17:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.match(MiLenguajeParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 62;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 60;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expr);
	                    this.state = 54;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 55;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 56;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expr);
	                    this.state = 57;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 58;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 59;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	rw() {
	    let localctx = new RwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_rw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.T__6 = 7;
MiLenguajeParser.T__7 = 8;
MiLenguajeParser.T__8 = 9;
MiLenguajeParser.T__9 = 10;
MiLenguajeParser.PERRO = 11;
MiLenguajeParser.FLOAT = 12;
MiLenguajeParser.INT = 13;
MiLenguajeParser.VAR = 14;
MiLenguajeParser.PRINT = 15;
MiLenguajeParser.ID = 16;
MiLenguajeParser.NUMBER = 17;
MiLenguajeParser.STRING = 18;
MiLenguajeParser.WS = 19;

MiLenguajeParser.RULE_start = 0;
MiLenguajeParser.RULE_stat = 1;
MiLenguajeParser.RULE_declaration = 2;
MiLenguajeParser.RULE_assignation = 3;
MiLenguajeParser.RULE_impri = 4;
MiLenguajeParser.RULE_expr = 5;
MiLenguajeParser.RULE_rw = 6;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_start;
    }

	PERRO() {
	    return this.getToken(MiLenguajeParser.PERRO, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_stat;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	assignation() {
	    return this.getTypedRuleContext(AssignationContext,0);
	};

	impri() {
	    return this.getTypedRuleContext(ImpriContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_declaration;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclaracionContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	rw() {
	    return this.getTypedRuleContext(RwContext,0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.DeclaracionContext = DeclaracionContext;

class AssignationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_assignation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends AssignationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	rw() {
	    return this.getTypedRuleContext(RwContext,0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AsignacionContext = AsignacionContext;

class ImpriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_impri;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImprimirContext extends ImpriContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	rw() {
	    return this.getTypedRuleContext(RwContext,0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.ImprimirContext = ImprimirContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AddSubExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AddSubExprContext = AddSubExprContext;

class NumberExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(MiLenguajeParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.NumberExprContext = NumberExprContext;

class ParensExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitParensExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.ParensExprContext = ParensExprContext;

class MulDivExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.MulDivExprContext = MulDivExprContext;

class IdExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitIdExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.IdExprContext = IdExprContext;

class RwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_rw;
    }

	FLOAT() {
	    return this.getToken(MiLenguajeParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(MiLenguajeParser.INT, 0);
	};

	VAR() {
	    return this.getToken(MiLenguajeParser.VAR, 0);
	};

	PRINT() {
	    return this.getToken(MiLenguajeParser.PRINT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitRw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.StartContext = StartContext; 
MiLenguajeParser.StatContext = StatContext; 
MiLenguajeParser.DeclarationContext = DeclarationContext; 
MiLenguajeParser.AssignationContext = AssignationContext; 
MiLenguajeParser.ImpriContext = ImpriContext; 
MiLenguajeParser.ExprContext = ExprContext; 
MiLenguajeParser.RwContext = RwContext; 
