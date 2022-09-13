import {  AuthenticationType, OrderSourceAppMetadata } from "@shipengine/connect-order-source-api";
import { brandOne } from "./order-source";

export const Metadata: OrderSourceAppMetadata = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "792294d1-406e-47e0-8ac5-99aaf89f79b0",
    Name: "acenda-shipengine",
    AuthProcess: {
        Identifier: {
            AuthenticationType: AuthenticationType.Basic,
            IsSandbox: false
        }
    },
    OrderSources: [brandOne]
};
