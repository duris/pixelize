"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/Canvas.tsx":
/*!************************!*\
  !*** ./src/Canvas.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Canvas = ()=>{\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        if (!canvas) {\n            return;\n        }\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) {\n            return;\n        }\n        ctx.canvas.height = 400;\n        ctx.canvas.width = 400;\n        const picture = document.getElementById(\"picture\");\n        if (!picture) {\n            return;\n        }\n        ctx.drawImage(picture, 40, 0, 200, 230);\n        function drawPixelated(imageData, pixel_size) {\n            if (!ctx) {\n                return;\n            }\n            if (!canvas) {\n                return;\n            }\n            // scale down\n            ctx.scale(1 / pixel_size, 1 / pixel_size);\n            ctx.putImageData(imageData, 0, 0);\n            // make next drawing erase what's currently on the canvas\n            ctx.globalCompositeOperation = \"copy\";\n            // nearest-neighbor\n            ctx.imageSmoothingEnabled = false;\n            // scale up\n            ctx.setTransform(pixel_size, 0, 0, pixel_size, 0, 0);\n            ctx.drawImage(canvas, 0, 0);\n            // reset all to defaults\n            ctx.setTransform(1, 0, 0, 1, 0, 0);\n            ctx.globalCompositeOperation = \"source-over\";\n            ctx.imageSmoothingEnabled = false;\n        }\n        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n        if (!imageData) {\n            return;\n        }\n        // img.onload = animeLoop;\n        // img.src = \"/apple.jpg\"\n        const data = ctx.getImageData(30, 0, canvas.width, canvas.height);\n        // crypto.getRandomValues(data);\n        let size = 2;\n        let speed = 0.05;\n        animeLoop();\n        function animeLoop() {\n            if (!ctx) {\n                return;\n            }\n            if (!canvas) {\n                return;\n            }\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            size + 40;\n            drawPixelated(data, size);\n            requestAnimationFrame(animeLoop);\n        }\n    // const imageData = ctx.getImageData(0,0,200,200)\n    // var pix = imageData.data\n    // var newColor = {r:0, g:0, b:0, a:0}\n    // console.log(imageData);\n    // for(let i=0; i< imageData.data.length; i += 4){\n    //   const r = pix[i]\n    //   const g = pix[i +1]\n    //   const b = pix[i +2]\n    //   // if(!r || !g || !b){\n    //   //   return\n    //   // }\n    //   // if(r != null && r>248) {\n    //   //   pix[i] = newColor.r;\n    //   // }\n    //   // if(g != null && g>248) {\n    //   //   pix[i + 1] = newColor.r;\n    //   // }\n    //   // if(b != null && b>248) {\n    //   //   pix[i + 2] = newColor.r;\n    //   // }\n    //   if(r == 255 && g == 255 && b == 255){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 254 && g == 254 && b == 254){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 253 && g == 253 && b == 253){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }if(r == 252 && g == 252 && b == 252){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 251 && g == 251 && b == 251){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 250 && g == 250 && b == 250){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 249 && g == 249 && b == 249){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 252 && g == 250 && b == 250){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 250 && g == 250 && b == 252){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    //   if(r == 248 && g == 248 && b == 251){\n    //     pix[i] = newColor.r;\n    //     pix[i +1] = newColor.g;\n    //     pix[i + 3] = newColor.a;\n    //   }\n    // }\n    // ctx.putImageData(imageData, 0, 0)\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/pizza.png\",\n                id: \"picture\",\n                className: \"w-[200px] float-left\"\n            }, void 0, false, {\n                fileName: \"/Users/rossduris/dev/js/pixelize/src/Canvas.tsx\",\n                lineNumber: 163,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                className: \"border bg-blue-200 w-[900px]\"\n            }, void 0, false, {\n                fileName: \"/Users/rossduris/dev/js/pixelize/src/Canvas.tsx\",\n                lineNumber: 165,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07SUFDTiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixNQUFNO0lBQ04sMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLE1BQU07SUFDTixJQUFJO0lBQ0osb0NBQW9DO0tBSXJDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTs7MEJBRUYsOERBQUNHLEtBQUc7Z0JBQUVDLEdBQUcsRUFBQyxZQUFZO2dCQUFDQyxFQUFFLEVBQUMsU0FBUztnQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7Ozs7eUJBQUc7MEJBRXZFLDhEQUFDNUIsUUFBTTtnQkFBQzZCLEdBQUcsRUFBRTlCLFNBQVM7Z0JBQUU2QixTQUFTLEVBQUMsOEJBQThCOzs7Ozt5QkFBRzs7b0JBR2hFLENBQ0Q7Q0FDSDtBQUVELGlFQUFlOUIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbW92ZS1iZy8uL3NyYy9DYW52YXMudHN4PzM4NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDYW52YXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpOyAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGlmKCFjYW52YXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAgXG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZighY3R4KXsgICAgICBcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gNDAwXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGljdHVyZVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBpZighcGljdHVyZSl7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjdHguZHJhd0ltYWdlKHBpY3R1cmUsIDQwLCAwLDIwMCwgMjMwKVxuXG5cbiAgICBmdW5jdGlvbiBkcmF3UGl4ZWxhdGVkKCBpbWFnZURhdGE6IGFueSwgcGl4ZWxfc2l6ZTogYW55KSB7XG4gICAgICBpZighY3R4KXtyZXR1cm59IGlmKCFjYW52YXMpe3JldHVybn1cbiAgICAgIFxuICAgICAgIC8vIHNjYWxlIGRvd25cbiAgICAgIGN0eC5zY2FsZSgxIC8gcGl4ZWxfc2l6ZSwgMSAvIHBpeGVsX3NpemUpXG5cbiAgICAgIFxuXG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG4gICAgICAvLyBtYWtlIG5leHQgZHJhd2luZyBlcmFzZSB3aGF0J3MgY3VycmVudGx5IG9uIHRoZSBjYW52YXNcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgICAvLyBuZWFyZXN0LW5laWdoYm9yXG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAvLyBzY2FsZSB1cFxuICAgICAgY3R4LnNldFRyYW5zZm9ybShwaXhlbF9zaXplLCAwLCAwLCBwaXhlbF9zaXplLCAwLCAwKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgIFxuICAgICAgLy8gcmVzZXQgYWxsIHRvIGRlZmF1bHRzXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgaWYoIWltYWdlRGF0YSl7cmV0dXJufVxuXG5cbiAgICAvLyBpbWcub25sb2FkID0gYW5pbWVMb29wO1xuICAgIC8vIGltZy5zcmMgPSBcIi9hcHBsZS5qcGdcIlxuXG4gICAgY29uc3QgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMzAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgLy8gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkYXRhKTtcbiAgICBcbiAgICBsZXQgc2l6ZSA9IDI7XG4gICAgbGV0IHNwZWVkID0gMC4wNTtcbiAgICBcbiAgICBhbmltZUxvb3AoKTtcbiAgZnVuY3Rpb24gYW5pbWVMb29wKCkge1xuICAgIGlmKCFjdHgpe3JldHVybn0gaWYoIWNhbnZhcyl7cmV0dXJufVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHNpemUgKzQwXG5cbiAgICBkcmF3UGl4ZWxhdGVkKCBkYXRhLCBzaXplICk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWVMb29wKTtcbn1cbiAgICBcbiAgICAvLyBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsMCwyMDAsMjAwKVxuICAgIC8vIHZhciBwaXggPSBpbWFnZURhdGEuZGF0YVxuICAgIC8vIHZhciBuZXdDb2xvciA9IHtyOjAsIGc6MCwgYjowLCBhOjB9XG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2VEYXRhKTtcbiAgICAvLyBmb3IobGV0IGk9MDsgaTwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpe1xuICAgIC8vICAgY29uc3QgciA9IHBpeFtpXVxuICAgIC8vICAgY29uc3QgZyA9IHBpeFtpICsxXVxuICAgIC8vICAgY29uc3QgYiA9IHBpeFtpICsyXVxuXG4gICAgLy8gICAvLyBpZighciB8fCAhZyB8fCAhYil7XG4gICAgLy8gICAvLyAgIHJldHVyblxuICAgIC8vICAgLy8gfVxuICAgICAgXG4gICAgLy8gICAvLyBpZihyICE9IG51bGwgJiYgcj4yNDgpIHtcbiAgICAvLyAgIC8vICAgcGl4W2ldID0gbmV3Q29sb3IucjtcbiAgICAvLyAgIC8vIH1cbiAgICAvLyAgIC8vIGlmKGcgIT0gbnVsbCAmJiBnPjI0OCkge1xuICAgIC8vICAgLy8gICBwaXhbaSArIDFdID0gbmV3Q29sb3IucjtcbiAgICAvLyAgIC8vIH1cbiAgICAvLyAgIC8vIGlmKGIgIT0gbnVsbCAmJiBiPjI0OCkge1xuICAgIC8vICAgLy8gICBwaXhbaSArIDJdID0gbmV3Q29sb3IucjtcbiAgICAvLyAgIC8vIH1cblxuICAgIC8vICAgaWYociA9PSAyNTUgJiYgZyA9PSAyNTUgJiYgYiA9PSAyNTUpe1xuICAgIC8vICAgICBwaXhbaV0gPSBuZXdDb2xvci5yO1xuICAgIC8vICAgICBwaXhbaSArMV0gPSBuZXdDb2xvci5nO1xuICAgIC8vICAgICBwaXhbaSArIDNdID0gbmV3Q29sb3IuYTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmKHIgPT0gMjU0ICYmIGcgPT0gMjU0ICYmIGIgPT0gMjU0KXtcbiAgICAvLyAgICAgcGl4W2ldID0gbmV3Q29sb3IucjtcbiAgICAvLyAgICAgcGl4W2kgKzFdID0gbmV3Q29sb3IuZztcbiAgICAvLyAgICAgcGl4W2kgKyAzXSA9IG5ld0NvbG9yLmE7XG4gICAgLy8gICB9XG4gICAgLy8gICBpZihyID09IDI1MyAmJiBnID09IDI1MyAmJiBiID09IDI1Myl7XG4gICAgLy8gICAgIHBpeFtpXSA9IG5ld0NvbG9yLnI7XG4gICAgLy8gICAgIHBpeFtpICsxXSA9IG5ld0NvbG9yLmc7XG4gICAgLy8gICAgIHBpeFtpICsgM10gPSBuZXdDb2xvci5hO1xuICAgIC8vICAgfWlmKHIgPT0gMjUyICYmIGcgPT0gMjUyICYmIGIgPT0gMjUyKXtcbiAgICAvLyAgICAgcGl4W2ldID0gbmV3Q29sb3IucjtcbiAgICAvLyAgICAgcGl4W2kgKzFdID0gbmV3Q29sb3IuZztcbiAgICAvLyAgICAgcGl4W2kgKyAzXSA9IG5ld0NvbG9yLmE7XG4gICAgLy8gICB9XG4gICAgLy8gICBpZihyID09IDI1MSAmJiBnID09IDI1MSAmJiBiID09IDI1MSl7XG4gICAgLy8gICAgIHBpeFtpXSA9IG5ld0NvbG9yLnI7XG4gICAgLy8gICAgIHBpeFtpICsxXSA9IG5ld0NvbG9yLmc7XG4gICAgLy8gICAgIHBpeFtpICsgM10gPSBuZXdDb2xvci5hO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYociA9PSAyNTAgJiYgZyA9PSAyNTAgJiYgYiA9PSAyNTApe1xuICAgIC8vICAgICBwaXhbaV0gPSBuZXdDb2xvci5yO1xuICAgIC8vICAgICBwaXhbaSArMV0gPSBuZXdDb2xvci5nO1xuICAgIC8vICAgICBwaXhbaSArIDNdID0gbmV3Q29sb3IuYTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmKHIgPT0gMjQ5ICYmIGcgPT0gMjQ5ICYmIGIgPT0gMjQ5KXtcbiAgICAvLyAgICAgcGl4W2ldID0gbmV3Q29sb3IucjtcbiAgICAvLyAgICAgcGl4W2kgKzFdID0gbmV3Q29sb3IuZztcbiAgICAvLyAgICAgcGl4W2kgKyAzXSA9IG5ld0NvbG9yLmE7XG4gICAgLy8gICB9XG4gICAgLy8gICBpZihyID09IDI1MiAmJiBnID09IDI1MCAmJiBiID09IDI1MCl7XG4gICAgLy8gICAgIHBpeFtpXSA9IG5ld0NvbG9yLnI7XG4gICAgLy8gICAgIHBpeFtpICsxXSA9IG5ld0NvbG9yLmc7XG4gICAgLy8gICAgIHBpeFtpICsgM10gPSBuZXdDb2xvci5hO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYociA9PSAyNTAgJiYgZyA9PSAyNTAgJiYgYiA9PSAyNTIpe1xuICAgIC8vICAgICBwaXhbaV0gPSBuZXdDb2xvci5yO1xuICAgIC8vICAgICBwaXhbaSArMV0gPSBuZXdDb2xvci5nO1xuICAgIC8vICAgICBwaXhbaSArIDNdID0gbmV3Q29sb3IuYTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmKHIgPT0gMjQ4ICYmIGcgPT0gMjQ4ICYmIGIgPT0gMjUxKXtcbiAgICAvLyAgICAgcGl4W2ldID0gbmV3Q29sb3IucjtcbiAgICAvLyAgICAgcGl4W2kgKzFdID0gbmV3Q29sb3IuZztcbiAgICAvLyAgICAgcGl4W2kgKyAzXSA9IG5ld0NvbG9yLmE7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKVxuXG4gICAgXG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgPGltZyAgc3JjPScvcGl6emEucG5nJyBpZD0ncGljdHVyZScgY2xhc3NOYW1lPVwidy1bMjAwcHhdIGZsb2F0LWxlZnRcIiAvPlxuXG4gIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibHVlLTIwMCB3LVs5MDBweF1cIiAvPlxuICBcbiAgXG4gIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2FudmFzIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInBpY3R1cmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwiZHJhd1BpeGVsYXRlZCIsImltYWdlRGF0YSIsInBpeGVsX3NpemUiLCJzY2FsZSIsInB1dEltYWdlRGF0YSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsInNldFRyYW5zZm9ybSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJzaXplIiwic3BlZWQiLCJhbmltZUxvb3AiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbWciLCJzcmMiLCJpZCIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Canvas.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.tsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Pixels\"\n                }, void 0, false, {\n                    fileName: \"/Users/rossduris/dev/js/pixelize/src/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rossduris/dev/js/pixelize/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rossduris/dev/js/pixelize/src/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRTZCO0FBQ0U7QUFFaEIsU0FBU0UsSUFBSSxHQUFFO0lBRzVCLHFCQUNFOzswQkFDRSw4REFBQ0Ysa0RBQUk7MEJBQ0gsNEVBQUNHLE9BQUs7OEJBQUMsUUFBTTs7Ozs7d0JBQVE7Ozs7O29CQUNoQjswQkFFUCw4REFBQ0YsK0NBQU07Ozs7b0JBQUc7O29CQUNULENBQ0o7Q0FJRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbW92ZS1iZy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vQ2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QaXhlbHM8L3RpdGxlPlxuICAgICAgPC9IZWFkPiAgICAgIFxuXG4gICAgICA8Q2FudmFzIC8+XG4gICAgPC8+XG4gIClcblxuXG5cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ2FudmFzIiwiSG9tZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();