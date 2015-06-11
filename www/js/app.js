// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module( 'starter', [ 'ionic' ] )

.run( [ "$rootScope", function( $rootScope ) {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if ( window.cordova && window.cordova.plugins.Keyboard ) {
    //     cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
    // }
    // if ( window.StatusBar ) {
    //     StatusBar.styleDefault();
    // }

    ionic.Platform.ready( function() {
        console.log("ionic ready");
        $rootScope.scan = function() {
            console.log("rootScope.scan");
            CardIO.canScan( function( canScan ) {
                alert( 'canscan' );
                console.log( "canScan: %o", canScan );

                CardIO.scan( {
                        "expiry": true,
                        "cvv": true,
                        "zip": false,
                        "suppressManual": false,
                        "suppressConfirm": false,
                        "hideLogo": true
                    },

                    function( data ) {
                        // Complete

                        console.log( data );
                        alert( 'scan ok' );
                        $rootScope.cardDetails = data;
                    },

                    function() {
                        // Cancel
                        alert( 'scan cancelled' );
                    } );

            } );

        }

    } );
} ] );