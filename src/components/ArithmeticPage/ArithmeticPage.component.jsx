import React from "react";

import classes from "./ArithmeticPage.module.css";
import { SheetsConfigContext } from "../../utils/global.context.jsx";
import { GRID_COL_ROW_MAPPER } from "../../utils/global.constants.js";

const ArithmeticPageComponent = () => {
  const { sheetsConfig } = React.useContext(SheetsConfigContext);
  return (
    <>
      {sheetsConfig.map((sheetConfig) => {
        const { name, sizes, selectedSheetsCount, symbol } = sheetConfig;
        return sizes.map((size, sizeIndex) => {
          const sheetsCount = selectedSheetsCount[sizeIndex];
          if (sheetsCount === 0) return null;
          const sizeMaxVal = Math.pow(10, size);
          const { COLUMN, ROW } = GRID_COL_ROW_MAPPER[size];
          return new Array(sheetsCount).fill(0).map((_, sheetIndex) => {
            return (
              <article
                data-size={"A4"}
                className={classes.sheet}
                key={sheetIndex}
              >
                <div className={classes.header}>
                  <h3 className={classes.heading}>{name}</h3>
                  {/*<p className={classes.pageNo}>Page - 1</p>*/}
                </div>

                <section
                  className={classes.section}
                  style={{
                    "--grid-col": COLUMN,
                    "--grid-row": ROW,
                  }}
                >
                  {new Array(COLUMN * ROW).fill(1).map(() => {
                    const op1 = Math.ceil(Math.random() * sizeMaxVal);
                    const op2 = Math.ceil(Math.random() * sizeMaxVal);
                    return (
                      <div
                        className={classes.expression}
                        key={crypto.randomUUID()}
                      >
                        <span className={classes.operand} data-op-type={1}>
                          {op1}
                        </span>
                        <span className={classes.operator}>{symbol}</span>
                        <span className={classes.operand} data-op-type={2}>
                          {op2}
                        </span>
                        <span className={classes.answer}></span>
                      </div>
                    );
                  })}
                </section>
              </article>
            );
          });
        });
      })}
      {/*<article data-size={"A4"} className={classes.sheet}>*/}
      {/*  <div className={classes.header}>*/}
      {/*    <h3 className={classes.heading}>Addition Arithmetic</h3>*/}
      {/*    /!*<p className={classes.pageNo}>Page - 1</p>*!/*/}
      {/*  </div>*/}

      {/*  <section className={classes.section}>*/}
      {/*    {new Array(36).fill(1).map(() => {*/}
      {/*      const op1 = Math.ceil(Math.random() * 10000);*/}
      {/*      const op2 = Math.ceil(Math.random() * 10000);*/}
      {/*      return (*/}
      {/*        <div className={classes.expression} key={crypto.randomUUID()}>*/}
      {/*          <span className={classes.operand} data-op-type={1}>*/}
      {/*            {op1}*/}
      {/*          </span>*/}
      {/*          <span className={classes.operator}>*</span>*/}
      {/*          <span className={classes.operand} data-op-type={2}>*/}
      {/*            {op2}*/}
      {/*          </span>*/}
      {/*          <span className={classes.answer}></span>*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </section>*/}
      {/*</article>*/}
    </>
  );
};

export default ArithmeticPageComponent;
