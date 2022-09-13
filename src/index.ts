import { OrderSourceApp } from '@shipengine/connect-order-source-api';
import {
    AcknowledgeOrders,
    GetConnectionContext,
    GetProducts,
    NotificationStatus,
    RegisterDeliveryOptions,
    RemoveDeliveryOptions,
    SalesOrdersExport,
    ShipmentNotification,
    VerifyDeliveryOptions,
} from './methods';
import {
    Metadata
} from './definitions';

export default new OrderSourceApp({
    AcknowledgeOrders,
    GetConnectionContext,
    GetProducts,
    NotificationStatus,
    RegisterDeliveryOptions,
    RemoveDeliveryOptions,
    SalesOrdersExport,
    ShipmentNotification,
    VerifyDeliveryOptions,
    Metadata,
})
