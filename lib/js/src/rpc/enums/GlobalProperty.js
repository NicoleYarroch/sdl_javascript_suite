/* eslint-disable camelcase */
/*
* Copyright (c) 2020, SmartDeviceLink Consortium, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the SmartDeviceLink Consortium Inc. nor the names of
* its contributors may be used to endorse or promote products derived
* from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { Enum } from '../../util/Enum.js';

/**
 * The different global properties.
 * @typedef {Enum} GlobalProperty
 * @property {Object} _MAP
 */
class GlobalProperty extends Enum {
    /**
     * @constructor
     */
    constructor () {
        super();
    }

    /**
     * Location of the user's seat of setGlobalProperties
     * @return {String}
     */
    static get USER_LOCATION () {
        return GlobalProperty._MAP.USER_LOCATION;
    }

    /**
     * The property helpPrompt of setGlobalProperties
     * @return {String}
     */
    static get HELPPROMPT () {
        return GlobalProperty._MAP.HELPPROMPT;
    }

    /**
     * The property timeoutPrompt of setGlobalProperties
     * @return {String}
     */
    static get TIMEOUTPROMPT () {
        return GlobalProperty._MAP.TIMEOUTPROMPT;
    }

    /**
     * The property vrHelpTitle of setGlobalProperties
     * @return {String}
     */
    static get VRHELPTITLE () {
        return GlobalProperty._MAP.VRHELPTITLE;
    }

    /**
     * The property array of vrHelp of setGlobalProperties
     * @return {String}
     */
    static get VRHELPITEMS () {
        return GlobalProperty._MAP.VRHELPITEMS;
    }

    /**
     * The property in-app menu name of setGlobalProperties
     * @return {String}
     */
    static get MENUNAME () {
        return GlobalProperty._MAP.MENUNAME;
    }

    /**
     * The property in-app menu icon of setGlobalProperties
     * @return {String}
     */
    static get MENUICON () {
        return GlobalProperty._MAP.MENUICON;
    }

    /**
     * The on-screen keyboard configuration of setGlobalProperties
     * @return {String}
     */
    static get KEYBOARDPROPERTIES () {
        return GlobalProperty._MAP.KEYBOARDPROPERTIES;
    }

    /**
     * Get the value for the given enum key
     * @param key - A key to find in the map of the subclass
     * @return {*} - Returns a value if found, or null if not found
     */
    static valueForKey (key) {
        return GlobalProperty._valueForKey(key, GlobalProperty._MAP);
    }

    /**
     * Get the key for the given enum value
     * @param value - A primitive value to find the matching key for in the map of the subclass
     * @return {*} - Returns a key if found, or null if not found
     */
    static keyForValue (value) {
        return GlobalProperty._keyForValue(value, GlobalProperty._MAP);
    }
}

GlobalProperty._MAP = Object.freeze({
    'USER_LOCATION': 'USER_LOCATION',
    'HELPPROMPT': 'HELPPROMPT',
    'TIMEOUTPROMPT': 'TIMEOUTPROMPT',
    'VRHELPTITLE': 'VRHELPTITLE',
    'VRHELPITEMS': 'VRHELPITEMS',
    'MENUNAME': 'MENUNAME',
    'MENUICON': 'MENUICON',
    'KEYBOARDPROPERTIES': 'KEYBOARDPROPERTIES',
});

export { GlobalProperty };