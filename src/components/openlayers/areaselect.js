import { Control } from 'ol/control.js';
import { fromLonLat, toLonLat } from 'ol/proj';

export default class AreaSelect {

	constructor(map, width = null, height = null) {
        this.map = map;
        var size = this.map.getSize();
        this.width = width || (size[0] > 0 ? size[0] * 0.7 : 300);
        this.height = height || (size[1] > 0 ? size[1] * 0.7 : 200);
		this.moving = false;
		this.createElements();
		this.addControls();
		this.render();
	}
    
    getBounds() {
        var size = this.map.getSize();
        var topRight = [0,0];
        var bottomLeft = [0,0];
        bottomLeft[0] = Math.round((size[0] - this.width) / 2);
        topRight[1] = Math.round((size[1] - this.height) / 2);
        topRight[0] = size[0] - bottomLeft[0];
        bottomLeft[1] = size[1] - topRight[1];
        
        var sw = toLonLat(this.map.getCoordinateFromPixel(bottomLeft));
		var ne = toLonLat(this.map.getCoordinateFromPixel(topRight));
		return {
			west: sw[0],
			south: sw[1],
			east: ne[0],
			north: ne[1]
        };
	}
    
    setBounds(bounds) {
        var ws = fromLonLat([bounds.west, bounds.south]);
        var en = fromLonLat([bounds.east, bounds.north]);
        this.map.getView().fit([...ws, ...en], {
            callback: () => {
                var bottomLeft = this.map.getPixelFromCoordinate(ws);
                var topRight = this.map.getPixelFromCoordinate(en);

                this.width = parseInt(Math.abs(bottomLeft[0] - topRight[0]));
                this.height = parseInt(Math.abs(bottomLeft[1] - topRight[1]));
                this.render();
            }
        });
    }

	createElement(tag, classNames, parent) {
		var elem = document.createElement(tag);
		elem.className = classNames;
		if (parent) {
			parent.appendChild(elem);
		}
		return elem;
	}
    
    createElements() {
        if (!!this.overlayContainer) {
			return;
		}
        
        this.overlayContainer = this.createElement("div", "ol-unselectable ol-areaselect ol-areaselect-shade-container", this.map.getOverlayContainer());
        this.topShade = this.createElement("div", "ol-areaselect-shade", this.overlayContainer);
        this.bottomShade = this.createElement("div", "ol-areaselect-shade", this.overlayContainer);
        this.leftShade = this.createElement("div", "ol-areaselect-shade", this.overlayContainer);
        this.rightShade = this.createElement("div", "ol-areaselect-shade", this.overlayContainer);
        
        this.nwHandle = this.createElement("div", "ol-areaselect-handle");
        this.swHandle = this.createElement("div", "ol-areaselect-handle");
        this.neHandle = this.createElement("div", "ol-areaselect-handle");
        this.seHandle = this.createElement("div", "ol-areaselect-handle");
        
        this.setUpHandlerEvents(this.nwHandle);
        this.setUpHandlerEvents(this.neHandle, -1, 1);
        this.setUpHandlerEvents(this.swHandle, 1, -1);
        this.setUpHandlerEvents(this.seHandle, -1, -1);

        this.map.on("change:size", () => this.onMapResize());
    }
    
    setUpHandlerEvents(handle, xMod, yMod) {
        xMod = xMod || 1;
        yMod = yMod || 1;

		var onMouseMove = (event) => {
			if (!this.moving) {
				return;
			}
            var size = this.map.getSize();
			this.width += (this.moving[0] - event.pageX) * 2 * xMod;
			this.height += (this.moving[1] - event.pageY) * 2 * yMod;
			this.width = Math.max(30, this.width);
			this.height = Math.max(30, this.height);
			this.width = Math.min(size[0]-30, this.width);
			this.height = Math.min(size[1]-30, this.height);
			this.moving = [event.pageX, event.pageY];
			this.render();
        };
        
        var mapElem = this.map.getTargetElement();
        var htmlElem = document.querySelector('html');

        var onMouseUp = () => {
            if (!this.map.getTargetElement()) return;
            mapElem.removeEventListener("mousemove", onMouseMove);
            htmlElem.removeEventListener("mouseup", onMouseUp);
			this.moving = false;
		};

        handle.addEventListener("mousedown", (event) => {
			event.stopPropagation();
			this.moving = [event.pageX, event.pageY];
            mapElem.addEventListener("mousemove", onMouseMove);
            htmlElem.addEventListener("mouseup", onMouseUp);
        });
    }
    
    onMapResize() {
        this.render();
    }
    
    render() {
		var size = this.map.getSize();
        var handleOffset = Math.round(this.nwHandle.offsetWidth/2);
        var topBottomHeight = Math.round((size[1] - this.height)/2);
		var leftRightWidth = Math.round((size[0] - this.width)/2);

        this.setElementDimensions(this.overlayContainer, {width: size[0], height: size[1]});
        this.setElementDimensions(this.topShade, {width: size[0], height: topBottomHeight, top: 0, left: 0});
        this.setElementDimensions(this.bottomShade, {width: size[0], height: topBottomHeight, bottom: 0, left: 0});
        this.setElementDimensions(this.leftShade, {
            width: leftRightWidth, 
            height: size[1]-(topBottomHeight*2), 
            top: topBottomHeight, 
            left: 0
        });
        this.setElementDimensions(this.rightShade, {
            width: leftRightWidth, 
            height: size[1]-(topBottomHeight*2), 
            top: topBottomHeight, 
            right: 0
        });
        
        this.setElementDimensions(this.nwHandle, {left: leftRightWidth-handleOffset, top: topBottomHeight-7});
        this.setElementDimensions(this.neHandle, {right: leftRightWidth-handleOffset, top: topBottomHeight-7});
        this.setElementDimensions(this.swHandle, {left: leftRightWidth-handleOffset, bottom: topBottomHeight-7});
        this.setElementDimensions(this.seHandle, {right: leftRightWidth-handleOffset, bottom: topBottomHeight-7});
    }
        
	setElementDimensions(element, dimension) {
		element.style.width = dimension.width + "px";
		element.style.height = dimension.height + "px";
		element.style.top = dimension.top + "px";
		element.style.left = dimension.left + "px";
		element.style.bottom = dimension.bottom + "px";
		element.style.right = dimension.right + "px";
	}

	addControls() {
		this.addControl(this.nwHandle);
		this.addControl(this.neHandle);
		this.addControl(this.swHandle);
		this.addControl(this.seHandle);
	}
	
	addControl(element) {
		this.map.addControl(
			new Control({
				element: element
			})
		);
	}

}