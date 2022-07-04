"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sources.css");
class Sources {
    draw(data) {
        var _a;
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp === null || sourceItemTemp === void 0 ? void 0 : sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        (_a = document.querySelector('.sources')) === null || _a === void 0 ? void 0 : _a.append(fragment);
    }
}
exports.default = Sources;
