import { ConnectionFormSchema } from "../forms/connect";
import { join } from "path";
import { OrderSourceDefinition } from "@shipengine/connect-order-source-api";

export const brandOne: OrderSourceDefinition = {
    // DO NOT CHANGE THIS ID AFTER PUBLISHING
    Id: "5cfcf5d5-a607-429f-92ba-5de5dffb6689",
    Name: "acenda-shipengine",
    SendEmail: false,
    CanConfigureTimeZone: false,
    CanLeaveFeedback: false,
    HasCustomMappings: false,
    HasCustomStatuses: false,
    HasInventoryLevels: false,
    AccountConnection: {
        Name: "acenda-shipengine Connection",
        ConnectionFormSchema
    },
    Images: {
        Logo: join(__dirname, "../../assets/logo.svg"),
        Icon: join(__dirname, "../../assets/icon.svg"),
    }
};
