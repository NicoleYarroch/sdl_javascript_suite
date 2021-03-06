/*
* Copyright (c) 2020, Livio, Inc.
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
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
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

class SdlManagerListener {
    /**
     * Initializes an instance of SdlManagerListener
     * @constructor
     */
    constructor () {
        this._onStart = (sdlManager) => {};
        this._onDestroy = (sdlManager) => {};
        this._onError = (sdlManager, info) => {};
        this._managerShouldUpdateLifecycle = (language) => {
            return null;
        };
    }

    setOnStart (callback) {
        this._onStart = callback;
        return this;
    }

    setOnDestroy (callback) {
        this._onDestroy = callback;
        return this;
    }

    setOnError (callback) {
        this._onError = callback;
        return this;
    }

    setManagerShouldUpdateLifecycle (callback) {
        this._managerShouldUpdateLifecycle = callback;
        return this;
    }

    onStart (sdlManager) {
        if (typeof this._onStart === 'function') {
            this._onStart(sdlManager);
        }
    }

    onDestroy (sdlManager) {
        if (typeof this._onDestroy === 'function') {
            this._onDestroy(sdlManager);
        }
    }

    onError (sdlManager, info) {
        if (typeof this._onError === 'function') {
            this._onError(sdlManager, info);
        }
    }

    managerShouldUpdateLifecycle (language) {
        if (typeof this._managerShouldUpdateLifecycle === 'function') {
            this._managerShouldUpdateLifecycle(language);
        }
    }
}

export { SdlManagerListener };