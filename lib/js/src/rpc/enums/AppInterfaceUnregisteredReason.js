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
 * Error code, which comes from the module side.
 * @typedef {Enum} AppInterfaceUnregisteredReason
 * @property {Object} _MAP
 */
class AppInterfaceUnregisteredReason extends Enum {
    /**
     * @constructor
     */
    constructor () {
        super();
    }

    /**
     * @return {String}
     */
    static get IGNITION_OFF () {
        return AppInterfaceUnregisteredReason._MAP.IGNITION_OFF;
    }

    /**
     * @return {String}
     */
    static get BLUETOOTH_OFF () {
        return AppInterfaceUnregisteredReason._MAP.BLUETOOTH_OFF;
    }

    /**
     * @return {String}
     */
    static get USB_DISCONNECTED () {
        return AppInterfaceUnregisteredReason._MAP.USB_DISCONNECTED;
    }

    /**
     * @return {String}
     */
    static get REQUEST_WHILE_IN_NONE_HMI_LEVEL () {
        return AppInterfaceUnregisteredReason._MAP.REQUEST_WHILE_IN_NONE_HMI_LEVEL;
    }

    /**
     * @return {String}
     */
    static get TOO_MANY_REQUESTS () {
        return AppInterfaceUnregisteredReason._MAP.TOO_MANY_REQUESTS;
    }

    /**
     * @return {String}
     */
    static get DRIVER_DISTRACTION_VIOLATION () {
        return AppInterfaceUnregisteredReason._MAP.DRIVER_DISTRACTION_VIOLATION;
    }

    /**
     * @return {String}
     */
    static get LANGUAGE_CHANGE () {
        return AppInterfaceUnregisteredReason._MAP.LANGUAGE_CHANGE;
    }

    /**
     * @return {String}
     */
    static get MASTER_RESET () {
        return AppInterfaceUnregisteredReason._MAP.MASTER_RESET;
    }

    /**
     * @return {String}
     */
    static get FACTORY_DEFAULTS () {
        return AppInterfaceUnregisteredReason._MAP.FACTORY_DEFAULTS;
    }

    /**
     * @return {String}
     */
    static get APP_UNAUTHORIZED () {
        return AppInterfaceUnregisteredReason._MAP.APP_UNAUTHORIZED;
    }

    /**
     * @return {String}
     */
    static get PROTOCOL_VIOLATION () {
        return AppInterfaceUnregisteredReason._MAP.PROTOCOL_VIOLATION;
    }

    /**
     * @return {String}
     */
    static get UNSUPPORTED_HMI_RESOURCE () {
        return AppInterfaceUnregisteredReason._MAP.UNSUPPORTED_HMI_RESOURCE;
    }

    /**
     * Get the value for the given enum key
     * @param key - A key to find in the map of the subclass
     * @return {*} - Returns a value if found, or null if not found
     */
    static valueForKey (key) {
        return AppInterfaceUnregisteredReason._valueForKey(key, AppInterfaceUnregisteredReason._MAP);
    }

    /**
     * Get the key for the given enum value
     * @param value - A primitive value to find the matching key for in the map of the subclass
     * @return {*} - Returns a key if found, or null if not found
     */
    static keyForValue (value) {
        return AppInterfaceUnregisteredReason._keyForValue(value, AppInterfaceUnregisteredReason._MAP);
    }
}

AppInterfaceUnregisteredReason._MAP = Object.freeze({
    'IGNITION_OFF': 'IGNITION_OFF',
    'BLUETOOTH_OFF': 'BLUETOOTH_OFF',
    'USB_DISCONNECTED': 'USB_DISCONNECTED',
    'REQUEST_WHILE_IN_NONE_HMI_LEVEL': 'REQUEST_WHILE_IN_NONE_HMI_LEVEL',
    'TOO_MANY_REQUESTS': 'TOO_MANY_REQUESTS',
    'DRIVER_DISTRACTION_VIOLATION': 'DRIVER_DISTRACTION_VIOLATION',
    'LANGUAGE_CHANGE': 'LANGUAGE_CHANGE',
    'MASTER_RESET': 'MASTER_RESET',
    'FACTORY_DEFAULTS': 'FACTORY_DEFAULTS',
    'APP_UNAUTHORIZED': 'APP_UNAUTHORIZED',
    'PROTOCOL_VIOLATION': 'PROTOCOL_VIOLATION',
    'UNSUPPORTED_HMI_RESOURCE': 'UNSUPPORTED_HMI_RESOURCE',
});

export { AppInterfaceUnregisteredReason };