
//var creole=function(j){var c={};c._a='[^\\]|~\\n]*(?:(?:\\](?!\\])|~.)[^\\]|~\\n]*)*';c._d='[^\\]~\\n]*(?:(?:\\](?!\\])|~.)[^\\]~\\n]*)*';c._e='\\b(?:(?:https?|ftp)://|mailto:)';c._u=c._e+c._a;c._7=c._e+'\\S*[^\\s!"\',.:;?]';c._v='[\\w.]+:'+c._a;c._b='\\{\\{((?!\\{)[^|}\\n]*(?:}(?!})[^|}\\n]*)*)'+(j&&j.strict?'':'(?:')+'\\|([^}~\\n]*((}(?!})|~.)[^}~\\n]*)*)'+(j&&j.strict?'':')?')+'}}';var k=function(e,b){if(b instanceof Function){return b(e)}b=b instanceof Array?b:[b];if(typeof b[1]=='undefined'){b[1]=''}return b[0]+e+b[1]};var a={_G:{_2:'hr',_1:/(^|\n)\s*----\s*(\n|$)/},_H:{_2:'br',_1:/\\\\/},_I:{_2:'pre',_3:2,_1:/(^|\n)\{\{\{\n((.*\n)*?)\}\}\}(\n|$)/,_f:/^ ([ \t]*\}\}\})/gm,_j:'$1'},_J:{_2:'tt',_1:/\{\{\{(.*?\}\}\}+)/,_3:1,_f:/\}\}\}$/,_j:''},_k:{_2:'ul',_3:0,_1:/(^|\n)([ \t]*\*[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/},_l:{_2:'ol',_3:0,_1:/(^|\n)([ \t]*#[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/},_m:{_2:'li',_3:0,_1:/[ \t]*([*#]).+(\n[ \t]*[^*#\s].*)*(\n[ \t]*[*#]{2}.+)*/,_f:/(^|\n)[ \t]*[*#]/g,_j:'$1'},_w:{_2:'table',_3:0,_1:/(^|\n)(\|.*?[ \t]*(\n|$))+/},_x:{_2:'tr',_3:2,_1:/(^|\n)(\|.*?)\|?[ \t]*(\n|$)/},_y:{_2:'th',_1:/\|+=([^|]*)/,_3:1},_z:{_2:'td',_3:1,_1:'\\|+([^|~\\[{]*((~(.|(?=\\n)|$)|\\[\\['+c._a+'(\\|'+c._d+')?\\]\\]'+(j&&j.strict?'':'|'+c._b)+'|[\\[{])[^|~]*)*)'},_n:{_1:/.+/,_3:0},_A:{_2:'p',_3:0,_1:/(^|\n)([ \t]*\S.*(\n|$))+/},_B:{_3:0,_1:/(^|\n)([ \t]*[^\s].*(\n|$))+/},_C:{_2:'strong',_3:1,_1:/\*\*([^*~]*((\*(?!\*)|~(.|(?=\n)|$))[^*~]*)*)(\*\*|\n|$)/},_D:{_2:'em',_3:1,_1:'\\/\\/(((?!'+c._e+')[^\\/~])*(('+c._7+'|\\/(?!\\/)|~(.|(?=\\n)|$))((?!'+c._e+')[^\\/~])*)*)(\\/\\/|\\n|$)'},_b:{_1:c._b,_4:function(e,b,d){var f=document.createElement('img');f.src=b[1];f.alt=b[2]===undefined?(d&&d.defaultImageText?d.defaultImageText:''):b[2].replace(/~(.)/g,'$1');e.appendChild(f)}},_o:{_1:'\\[\\[('+c._u+')\\|('+c._d+')\\]\\]',_4:function(e,b,d){var f=document.createElement('a');f.href=b[1];if(d&&d.isPlainUri){f.appendChild(document.createTextNode(b[2]))}else{this._5(f,b[2],d)}e.appendChild(f)}},_6:{_1:'\\[\\[('+c._a+')\\|('+c._d+')\\]\\]',_4:function(e,b,d){var f=document.createElement('a');f.href=d&&d.linkFormat?k(b[1].replace(/~(.)/g,'$1'),d.linkFormat):b[1].replace(/~(.)/g,'$1');this._5(f,b[2],d);e.appendChild(f)}},_p:{_1:'\\[\\[('+c._u+')\\]\\]'},_q:{_1:'\\[\\[('+c._a+')\\]\\]'},_r:{_1:'\\[\\[('+c._v+')\\]\\]'},_7:{_1:'('+c._7+')'},_K:{_1:'~('+c._7+'|.)',_3:1,_2:'span',_c:{'class':'escaped'}},_L:{_1:/~(.)/,_3:1,_2:'span',_c:{'class':'escaped'}}};a._p._4=a._7._4=function(e,b,d){if(!d){d={}}d.isPlainUri=true;a._o._4.call(this,e,Array(b[0],b[1],b[1]),d)};a._q._4=function(e,b,d){a._6._4.call(this,e,Array(b[0],b[1],b[1]),d)};a._s={_1:'\\[\\[('+c._v+')\\|('+c._d+')\\]\\]',_4:function(e,b,d){var f=document.createElement('a');var g,h;if(d&&d.interwiki){g=b[1].match(/(.*?):(.*)/);h=d.interwiki[g[1]]}if(typeof h=='undefined'){if(!a._6._5){a._6=new this.constructor(a._6)}return a._6._4.call(a._6,e,b,d)}f.href=k(g[2].replace(/~(.)/g,'$1'),h);this._5(f,b[2],d);e.appendChild(f)}};a._r._4=function(e,b,d){a._s._4.call(this,e,Array(b[0],b[1],b[1]),d)};a._o._0=a._p._0=a._7._0=a._6._0=a._q._0=a._s._0=a._r._0=[a._L,a._b];for(var l=1;l<=6;l++){a['h'+l]={_2:'h'+l,_3:2,_1:'(^|\\n)[ \\t]*={'+l+'}[ \\t]*([^\\n=][^~]*?(~(.|(?=\\n)|$))*)[ \\t]*=*\\s*(\\n|$)'}}a._k._0=a._l._0=[a._m];a._m._0=[a._k,a._l];a._m._8=a._B;a._w._0=[a._x];a._x._0=[a._y,a._z];a._z._0=[a._n];a._y._0=[a._n];a.h1._0=a.h2._0=a.h3._0=a.h4._0=a.h5._0=a.h6._0=a._n._0=a._A._0=a._B._0=a._C._0=a._D._0=[a._K,a._C,a._D,a._H,a._7,a._o,a._s,a._6,a._p,a._r,a._q,a._J,a._b];a._t={_0:[a.h1,a.h2,a.h3,a.h4,a.h5,a.h6,a._G,a._k,a._l,a._I,a._w],_8:{_0:[a._A]}};creole._9.call(this,a,j)};creole._9=function(e,b){if(!arguments.length){return}this._g=e;this._g._t=new this._E(this._g._t);this._h=b};creole._i=function(e){if(!arguments.length){return}for(var b in e){this[b]=e[b]}if(!this._0){this._0=[]}};creole._9.prototype={_E:null,_g:null,_h:null,parse:function(e,b,d){if(d){for(i in this._h){if(typeof d[i]=='undefined'){d[i]=this._h[i]}}}else{d=this._h}b=b.replace(/\r\n?/g,'\n');this._g._t._5(e,b,d);if(d&&d.forIE){e.innerHTML=e.innerHTML.replace(/\r?\n/g,'\r\n')}}};creole._9.prototype.constructor=creole._9;creole._9.prototype._E=creole._i;creole._i.prototype={_F:function(e,b){return e.match(this._1)},_4:function(e,b,d){var f;if(this._3!==null){f=b[this._3]}var g;if(this._2){g=document.createElement(this._2);e.appendChild(g)}else{g=e}if(f){if(this._f){f=f.replace(this._f,this._j)}this._5(g,f,d)}if(this._c){for(var h in this._c){g.setAttribute(h,this._c[h]);if(d&&d.forIE&&h=='class'){g.className=this._c[h]}}}return this},_5:function(e,b,d){var f=''+b;var g=[];if(!this._8._5){this._8=new this.constructor(this._8)}while(true){var h=false;var j=false;for(var c=0;c<this._0.length;c++){if(typeof g[c]=='undefined'){if(!this._0[c]._F){this._0[c]=new this.constructor(this._0[c])}g[c]=this._0[c]._F(f,d)}if(g[c]&&(!h||h.index>g[c].index)){h=g[c];j=this._0[c];if(h.index==0){break}}}var k=h?h.index:f.length;if(k>0){this._8._5(e,f.substring(0,k),d)}if(!h){break}if(!j._4){j=new this.constructor(j)}j._4(e,h,d);var a=h.index+h[0].length;f=f.substring(a);for(var c=0;c<this._0.length;c++){if(g[c]){if(g[c].index>=a){g[c].index-=a}else{g[c]=void 0}}}}return this},_8:{_5:function(e,b,d){if(d&&d.forIE){b=b.replace(/\n/g,' \r')}e.appendChild(document.createTextNode(b))}}};creole._i.prototype.constructor=creole._i;creole.prototype=new creole._9();creole.prototype.constructor=creole;

var lookup = function(obj, key) {
    var type = typeof key;
    if (type == 'string' || type == "number") key = ("" + key).replace(/\[(.*?)\]/, function(m, key){//handle case where [1] may occur
        return '.' + key;
    }).split('.');
    for (var i = 0, l = key.length, currentkey; i < l; i++) {
        if (obj.hasOwnProperty(key[i])) obj = obj[key[i]];
        else return undefined;
    }
    return obj;
}

function printWord(word){
    $('#word_envelope').text(word);
    setWordDefinition('word_def',word);
}

function printWordDefinition(def){
    //Temporarily remove Wiki Especial markers until
    //I can figure out what to do with them
    var reg_remove_marker = /\{\{(.*?)\}\}/gm;

    creole = new Parse.Simple.Creole({
        forIE: document.all
    });
    
    var div = document.getElementById('word_def');
    def = def.replace(reg_remove_marker,'')
    creole.parse(div, def);
    
}


function setRandomWord(){
    //const url = 'http://fr.wiktionary.org/w/api.php?action=query&list=random&rnlimit=1&format=json';

    const url = 'https://fr.wiktionary.org/w/api.php?action=query&format=json&list=random&titles=Special:RandomInCategory/French_lemmas=0&rnlimit=1'
    $.ajax({
        url: url,
        url: url,
        dataType: 'jsonp', 
        success:function(data){
            let word = data['query']['random'][0]['title']
            printWord(word);
            setWordDefinition(word);
            console.log(data.toString())
        },
        error:function(){
          $(word_envelope).text('Ocorreu um erro 😔');
        }      
      });


}


function setWordDefinition(word){
    
    const url = 'https://fr.wiktionary.org/w/api.php?action=query&titles='+ word +'&prop=revisions&rvprop=content&format=json'

    $.ajax({
        url: url,
        dataType: 'jsonp', 
        success:function(data){
            
            let pages = data['query']['pages']
            let a = lookup(data,'query.pages')
            for(key in a) {
                if( a[key].hasOwnProperty('revisions')){


                    console.log(a[key]['revisions'][0]['*'])
                    var markup = a[key]['revisions'][0]['*'];

                    if(markup.indexOf('{{langue|fr}}') > -1 ){
                        printWordDefinition(markup)
                    }else{
                        setRandomWord()
                    }

                }
                
              }

        },
        error:function(){
            printWordDefinition('Definição Indisponível 😔');
        }      
      });
    
}

