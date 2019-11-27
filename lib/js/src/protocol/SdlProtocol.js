
import { SdlProtocolBase } from './../../../js/src/protocol/SdlProtocolBase.js';
import { TransportManager } from './../transport/TransportManager.js';


class SdlProtocol extends SdlProtocolBase {
    /**
     * @param {TransportConfigBase} baseTransportConfig 
     * @param {SdlSessionListener} sdlSessionListener 
     */
    constructor (baseTransportConfig, sdlSessionListener) {
        super(baseTransportConfig, sdlSessionListener);
        this.setTransportManager(new TransportManager(this._transportConfig, this._transportListener));
    }
}

export { SdlProtocol };