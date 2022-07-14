import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";
import moment from "moment";
import "moment/locale/es";
import Routes from "./routes/Routes";

moment.locale("es");

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={esES}>
    <Routes />
  </ConfigProvider>
);
