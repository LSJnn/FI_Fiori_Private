sap.ui.define([
    "sap/m/MessageToast", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (MessageToast, Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.app", {

            onInit: function () {},
            onHome(){
                this.getView().byId('menuBTn').setText("Home");
                this.getOwnerComponent().getRouter().navTo("Home");
            },
            onRequest(){
                this.getView().byId('menuBTn').setText("물품 요청 목록");
                this.getOwnerComponent().getRouter().navTo("Request");
            },
            onComapny(){
                this.getView().byId('menuBTn').setText("협력 업체 목록");
                this.getOwnerComponent().getRouter().navTo("Company");
            },
            onProduct(){
                this.getView().byId('menuBTn').setText("부품 목록");
                this.getOwnerComponent().getRouter().navTo("Product");
            }
        });
    });

