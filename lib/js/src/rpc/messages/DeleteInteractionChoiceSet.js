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

import { FunctionID } from '../enums/FunctionID.js';
import { RpcRequest } from '../RpcRequest.js';

/**
 * Deletes interaction choice set that has been created with "CreateInteractionChoiceSet". The interaction may only be
 * deleted when not currently in use by a "performInteraction".
 */
class DeleteInteractionChoiceSet extends RpcRequest {
    /**
     * Initalizes an instance of DeleteInteractionChoiceSet.
     * @constructor
     */
    constructor (store) {
        super(store);
        this.setFunctionName(FunctionID.DeleteInteractionChoiceSet);
    }

    /**
     * @param {Number} id - ID of the interaction choice set to delete.
     * @return {DeleteInteractionChoiceSet}
     */
    setInteractionChoiceSetID (id) {
        this.setParameter(DeleteInteractionChoiceSet.KEY_INTERACTION_CHOICE_SET_ID, id);
        return this;
    }

    /**
     * @return {Number}
     */
    getInteractionChoiceSetID () {
        return this.getParameter(DeleteInteractionChoiceSet.KEY_INTERACTION_CHOICE_SET_ID);
    }
}

DeleteInteractionChoiceSet.KEY_INTERACTION_CHOICE_SET_ID = 'interactionChoiceSetID';

export { DeleteInteractionChoiceSet };