grammar MiLenguaje;

start         : PERRO '{' stat* '}'; 
stat          : declaration
              | assignation
              | impri
              ;

declaration  : rw ID ';' #declaracion
             ;

assignation  : rw ID '=' expr ';'       #asignacion
             ;

impri        : rw '('ID')'';' #imprimir
             ;

expr         : expr op=('*'|'/') expr   #mulDivExpr
             | expr op=('+'|'-') expr   #addSubExpr
             | '(' expr ')'             #parensExpr
             | ID                        #idExpr
             | NUMBER                    #numberExpr
             ;

rw           : FLOAT
              |
              INT
              |
              VAR
              |
              PRINT
              ;



// Tokens
PERRO        : 'perro';
FLOAT        : 'rana';
INT          : 'conejo';
VAR          : 'avestruz';
PRINT        : 'huron';
ID           : [A-Za-z_][A-Za-z0-9_]*; 
NUMBER       : [0-9]+;
STRING       :  '"' (~["])* '"';
WS           : [ \t\r\n]+ -> skip;