import React, { useState } from "react";
import { Button } from "antd";
import { Tabs, TabPane, Col } from "./styles";
import { TableContent } from "../TableContent";
const data = require("../InjectedData/table.json");
export const TableSelector = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const previousTab = () => {
    const nextTab = parseInt(activeTab, 10) - 1;
    setActiveTab(nextTab.toString());
    checkerButton(nextTab);
  };

  const changeTab = () => {
    const nextTab = parseInt(activeTab, 10) + 1;
    setActiveTab(nextTab.toString());
    checkerButton(nextTab);
  };

  const clickTab = e => {
    checkerClick(e);
    setActiveTab(e);
  };

  const checkerClick = active => {
    if (active > 0) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (active >= data.length - 1) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  };

  const checkerButton = nextTab => {
    console.log(data.length);
    if (nextTab === 0) {
      setDisabledPrev(true);
    } else {
      setDisabledPrev(false);
    }

    if (nextTab >= data.length - 1) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  };

  return (
    <div>
      <Tabs activeKey={activeTab} onTabClick={clickTab} tabPosition="left">
        {Object.keys(data).map(key => {
          return (
            <TabPane tab={data[key].sheet} key={key}>
              <TableContent payload={data[key].payload} />
              <Col key={key}>
                <Button onClick={previousTab} disabled={disabledPrev}>
                  Previous Sheet
                </Button>
                <Button onClick={changeTab} disabled={disabledNext}>
                  Next Sheet
                </Button>
              </Col>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
