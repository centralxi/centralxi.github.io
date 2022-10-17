var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

"use strict";

// Date
( function(){
    Date.now = Date.now * 1 || function(){
        return +new Date;
    };
}() );

if( window[ "Fjs" ] ){
} else {
    var Fjs = {};

    ( function(){
        if( Fjs.detector )    return;

        var doc = document, dtt, keyList = {}, addEvent;

        //----------------------------------------------------------------------------------------------------------------------------------------------//
        // detector
        ( function(){
            var agent, browser, browserVersion, flash, result, flash = 0, flashVersion;

            /**
             * 디텍터
             * @type {{init: Function}}
             */
            dtt = {
                /**
                 * 디텍터 초기화
                 */
                init : function(){
                    checkAgent();
                    function checkAgent(){
                        agent = window.navigator.userAgent.toLowerCase();
                    };

                    checkBrowser();
                    function checkBrowser(){
                        function checkIe(){
                            if( agent.indexOf( "msie" ) > -1 ){
                                browser = "ie";
                                browserVersion = /msie ([\d]+)/.exec( agent )[1];
                                return true;
                            } else {
                                if( agent.indexOf( "trident" ) > -1 ){
                                    browser = "ie";
                                    browserVersion = 11;
                                    return true;
                                }
                            }
                        };

                        function checkChrome(){
                            var i;
                            if( agent.indexOf( i = 'chrome' ) < 0 && agent.indexOf( i = 'crios' ) < 0 ) return;
                            return browser = 'chrome', browserVersion = parseFloat( ( i == 'chrome' ? /chrome\/([\d]+)/ : /webkit\/([\d]+)/ ).exec( agent )[1] )
                        };

                        function checkSafari(){
                            if( agent.indexOf( "safari" ) > -1 ){
                                browser = "safari";
                                browserVersion = /safari\/([\d]+)/.exec( agent )[1];
                                return true;
                            }
                        };

                        function checkFirefox(){
                            if( agent.indexOf( "firefox" ) > -1 ){
                                browser = "firefox";
                                browserVersion = /firefox\/([\d]+)/.exec( agent )[1];
                                return true;
                            }
                        };

                        function checkOpera(){
                            if( agent.indexOf( "opera" ) > -1 ){
                                browser = "opera";
                                browserVersion = /opera\/([\d]+)/.exec( agent )[1];
                                return true;
                            }
                        };

                        checkIe() || checkChrome() || checkSafari() || checkFirefox() || checkOpera();
                    };

                    checkFlash();
                    function checkFlash(){
                        var t
                        if( browser == "ie" ){
                            t = new ActiveXObject( 'ShockwaveFlash.ShockwaveFlash' )
                            if( t ) t = t.GetVariable( '$version' ).substr( 4 ).split( ',' ), flash = 1, flashVersion = parseFloat( t[0] + '.' + t[1] )
                        } else {
                            t = navigator.plugins;
                            if( t['Shockwave Flash 2.0'] || t['Shockwave Flash'] ){
                                if( t['Shockwave Flash 2.0'] ) t = t['Shockwave Flash 2.0']; else t = t['Shockwave Flash'];
                                t = t.description.split( ' ' )[2].split( '.' ), flash = 1, flashVersion = parseFloat( t[0] + '.' + t[1] )
                            }
                        }
                    }

                    result = {
                        agent : agent,
                        browser : browser,
                        browserVersion : browserVersion,
                        flash : flash,
                        flashVersion : flashVersion,
                        text : ( browser == "ie" && browserVersion < 10 ) ? "innerText" : "innerHTML"
                    };
                    return result;
                }
            }.init();
        }() );

        //----------------------------------------------------------------------------------------------------------------------------------------------//
        // addEvent
        addEvent = (function(){
            if( doc.addEventListener )
                return function( $e, $et, $cb ){
                    $e.addEventListener( $et, $cb, false );
                }
            else if( doc.attachEvent )
                return function( $e, $et, $cb ){
                    $e.attachEvent( "on" + $et, $cb );
                }
        })();

        //----------------------------------------------------------------------------------------------------------------------------------------------//
        Fjs = {
            detector : dtt,

            init : function( $id, $url, $width, $height, $callBackFunc, $params ){
                var style, readyComplete;
                if( checkKey( $id ) )
                    throw new Error( "Fjs : 제공된 " + $id + "가 기존에 있습니다" );
                else
                // dom container
                    doc.write( "<div id=" + $id + "Div" + "></div>" ),
                        style = ( ( keyList[ $id ] = {} ).container = doc.getElementById( $id + "Div" ) ).style,
                        style.margin = "0px", style.padding = "0px",
                        style.width = typeof $width == "number" ? $width + "px" : $width,
                        style.height = typeof $height == "number" ? $height + "px" : $height,

                        // parent
                        keyList[ $id ].parent = keyList[ $id ].container.parentNode,

                        // ready complete
                        readyComplete = function(){
                            $params = $params || {};
                            if( checkVersion( $params ) )
                                $params.wmode = $params.wmode || "opaque",
                                    $params.allowScriptAccess = $params.allowScriptAccess || "always",
                                    keyList[ $id ].param = { url : $url, width : $width, height : $height, params : $params },
                                    addSwf( $id );
                            else
                                alternate( $id );

                            $callBackFunc ? $callBackFunc() : null;
                        },

                        // ready
                        domReady( readyComplete );
            },

            setSize : function( $id, $width, $height ){
                if( checkKey( $id ) ){
                    var style, flash, param;
                    style = keyList[ $id ].container.style,
                        flash = keyList[ $id ].flash,
                        param = keyList[ $id ].param,
                        param.width = style.width = flash.width = ( typeof $width == "number" ) ? $width + "px" : $width,
                        param.height = style.height = flash.height = ( typeof $height == "number" ) ? $height + "px" : $height;
                } else
                    checkKeyFalse( $id );
            },

            show : function( $id ){
                ( checkKey( $id ) ) ? keyList[ $id ].container.style.visibility = "visible" : checkKeyFalse( $id );
            },

            hide : function( $id ){
                ( checkKey( $id ) ) ? keyList[ $id ].container.style.visibility = "hidden" : checkKeyFalse( $id );
            },

            refresh : function( $id ){
                ( checkKey( $id ) ) ? addSwf( $id ) : checkKeyFalse( $id );
            },

            add : function( $id ){
                if( checkKey( $id ) ) keyList[ $id ].parent.appendChild( keyList[ $id ].container ), addSwf( $id );
                else checkKeyFalse( $id );
            },

            del : function( $id ){
                ( checkKey( $id ) ) ? keyList[ $id ].parent.removeChild( keyList[ $id ].container ) : checkKeyFalse( $id );
            },

            toFlash : function( $id, $func, $params ){
                keyList[ $id ].flash.toFlash( $func, ( $params ) ? $params : [] );
            },

            addReSize : function( $callBackFunc ){
                addEvent( window, "resize", function( $e ){
                    $callBackFunc( $e );
                } );
            }
        };

        function checkKey( $id ){
            return ( keyList[ $id ] != undefined );
        }

        function checkKeyFalse( $id ){
            console.log( "Fjs : 제공된 " + $id + "가 기존에 존재하지 않습니다" );
        }

        // 돔 컨텐츠 완료체크
        function domReady( $callBackFunc ){
            if( doc.addEventListener )
                doc.addEventListener( "DOMContentLoaded", $callBackFunc, false );
            else {
                var func = function(){
                    switch( doc.readyState ){
                        case"complete":
                        case"interactive":
                        case"loaded":
                            break;
                        default:
                            setTimeout( func, 10 );
                    }

                    if( doc && doc.getElementsByTagName && doc.getElementById && doc.body ) $callBackFunc();
                };
                func();
            }
        }

        function checkVersion( $params ){
            var version;
            if( $params.version == undefined ) return dtt.flashVersion >= 10.1;
            else  return version = $params.version, delete $params.version, dtt.flashVersion >= version;
        }

        function alternate( $id ){
            var a, img;
            a = doc.createElement( "a" ),
                a.href = "https://web.archive.org/web/20160320101906/http://www.adobe.com/go/getflashplayer",
                a.target = "_blank",
                keyList[ $id ].container.appendChild( a ),

                img = doc.createElement( "img" ),
                img.src = "https://web.archive.org/web/20160320101906/http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif",
                img.alt = "Get Adobe Flash player",
                a.appendChild( img );
        }

        function getFlash( $id ){
            return doc.getElementById( $id );
        }

        //----------------------------------------------------------------------------------------------------------------------------------------------//

        var addSwf = ( function(){
            if( dtt.browser == "ie" && dtt.browserVersion < 9 ){
                return function( $id ){
                    var param = keyList[ $id ].param, result, params = param.params, k;
                    result = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width=" + param.width + " height=" + param.height + " id=" + $id + " name=" + $id + " style='position:absolute; margin:0px; padding:0px'>",
                        result += "<param name='movie' value=" + param.url + " />";
                    for( k in params ){
                        result += "<param name=" + k + " value=" + params[ k ] + " />";
                    }
                    result += "</object>",
                        keyList[ $id ].container.innerHTML = result,
                        keyList[ $id ].flash = getFlash( $id );
                }
            } else {
                return function( $id ){
                    var param = keyList[ $id ].param, result, params = param.params, k;
                    result = "<object type='application/x-shockwave-flash' data=" + param.url + " width=" + param.width + " height=" + param.height + " id=" + $id + " style='position:absolute; margin:0px; padding:0px'>";
                    for( k in params ){
                        result += "<param name=" + k + " value=" + params[ k ] + " />";
                    }
                    result += "</object>",
                        keyList[ $id ].container.innerHTML = result,
                        keyList[ $id ].flash = getFlash( $id );
                }
            }
        }() );
    }() );

}


}
/*
     FILE ARCHIVED ON 10:19:06 Mar 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:34:47 Oct 17, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 159.854
  exclusion.robots: 0.138
  exclusion.robots.policy: 0.128
  RedisCDXSource: 0.8
  esindex: 0.024
  LoadShardBlock: 135.212 (3)
  PetaboxLoader3.datanode: 83.654 (4)
  CDXLines.iter: 19.027 (3)
  PetaboxLoader3.resolve: 102.318 (3)
  load_resource: 83.962
*/