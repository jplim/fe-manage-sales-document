sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.rizing.ddc.managesalesdocument',
            componentId: 'SalesDocumentList',
            contextPath: '/SalesDocument'
        },
        CustomPageDefinitions
    );
});