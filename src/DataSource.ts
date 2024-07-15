import { DataSource } from "typeorm";
import { ChapterInfo } from "./models/seriesInfoModel";
export const ServiceDataSource = new DataSource({
type: "sqlite",
database: "meta.db",
entities: [ChapterInfo],
});

ServiceDataSource.initialize()
.then(() => {
    console.log("ServiceDataSource is now connected");
})
.catch((error) => {
    console.error("ServiceDataSource failed to connect", error);
});


