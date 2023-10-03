import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight } from "react-bootstrap-icons";

interface IPaginator {
    recordCount: number;
    pageCount: number;
    pageNumber: number;
    onPageChange(pageNumber: number): void;
}

const CELL_COUNT = 7;
const CELL_MID_LEN = ~~(CELL_COUNT / 2);

class Page {
  nr: number = 0;
  ellipsis?: boolean = false;
  active?: boolean = false;
}

interface PagingData {
  ltEnable: boolean;
  rtEnable: boolean;
  pages: Page[];
}

const Paginator: React.FC<IPaginator> = (props) => {
    const [pagingData, setPagingData] = useState<PagingData>({
        ltEnable: false,
        rtEnable: false,
        pages: [],
      });
    
      const getLtEnable = () => {
        return props.pageNumber > 1;
      };
    
      const getRtEnable = () => {
        return props.pageNumber < props.pageCount;
      };
    
      const getPagingLayout = () => {
        const totalCount = props.pageCount,
          current = props.pageNumber;
        let pages: Page[] = [];
    
        if (totalCount > CELL_COUNT) {
          // Fill in first and last positions
          pages[0] = { nr: 1 };
          pages[1] = { nr: 2 };
          pages[CELL_COUNT - 2] = { nr: totalCount - 1 };
          pages[CELL_COUNT - 1] = { nr: totalCount };
    
          if (current <= CELL_MID_LEN) {
            // b ellipse is enabled and the rest of the array is filled
            pages[CELL_COUNT - 2].ellipsis = true;
            for (let i = 2; i < CELL_COUNT - 2; i++) {
              pages[i] = { nr: i + 1 };
            }
          } else if (totalCount - current < CELL_MID_LEN) {
            // a ellipsis is enabled and the later part of array is filled
            pages[1].ellipsis = true;
            for (let i = 2; i < CELL_COUNT - 2; i++) {
              pages[i] = { nr: totalCount - CELL_COUNT + i + 1 };
            }
          } else {
            // both a and b ellipsis are enabled
            pages[1].ellipsis = true;
            pages[CELL_COUNT - 2].ellipsis = true;
    
            // Current selected is put in centre
            pages[CELL_MID_LEN] = { nr: current };
            // Fill next and prev to mid point
            // CELL_COUNT - 5 := n{MID, FIRST, SECOND, LAST, SECONDLAST}
            for (let i = 1; i < CELL_COUNT - 5; i++) {
              pages[CELL_MID_LEN + i] = { nr: current + i };
              pages[CELL_MID_LEN - i] = { nr: current - i };
            }
          }
        } else {
          for (let i = 0; i < totalCount; i++) {
            pages[i] = { nr: i + 1, ellipsis: false };
          }
        }
    
        pages.forEach((p) => {
          if (p.nr === props.pageNumber) {
            p.active = true;
          }
        });
    
        return pages;
      };
    
      useEffect(() => {
        setPagingData({
          ltEnable: getLtEnable(),
          rtEnable: getRtEnable(),
          pages: getPagingLayout(),
        });
      }, [props.pageCount, props.recordCount, props.pageNumber]);
    
      if (props.recordCount == 0) return <></>
      
      return (
        <>
            <div className="text-center">
                <div style={{ textAlign: "center" }}>
                    Page{props.pageCount > 1 ? "s" : ""} {props.pageNumber} of{" "}
                    {props.pageCount}
                </div>
                <div
                    className={"text-body-secondary"}
                    style={{ textAlign: "center", fontSize: "90%" }}
                >
                    {props.recordCount} total record{props.recordCount > 1 ? "s" : ""}
                </div>
                <ButtonGroup>
                    {pagingData.ltEnable &&
                        <>
                            <Button onClick={() => props.onPageChange(1)} variant="outline-primary">
                                <ChevronDoubleLeft />
                            </Button>
                            <Button onClick={() => props.onPageChange(props.pageNumber - 1)} variant="outline-primary">
                                <ChevronLeft />
                            </Button>
                        </>
                    }
                    {pagingData.pages.map(page => (
                        <Button
                            key={page.nr}
                            variant={page.active ? "primary" : "outline-primary"}
                            active={page.active}
                            disabled={page.ellipsis}
                            onClick={() => {
                                if (!page.ellipsis && !page.active) {
                                    props.onPageChange(page.nr);
                                }
                            }}
                        >
                            {page.ellipsis ? "..." : page.nr}
                        </Button>
                    ))}
                    {pagingData.rtEnable &&
                        <>
                            <Button onClick={() => props.onPageChange(props.pageNumber + 1)} variant="outline-primary">
                                <ChevronRight />
                            </Button>
                            <Button onClick={() => props.onPageChange(props.pageCount)} variant="outline-primary">
                                <ChevronDoubleRight />
                            </Button>
                        </>
                    }
                </ButtonGroup>
            </div>
        </>
      );
}

export default Paginator;