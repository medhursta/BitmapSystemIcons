import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Col, Container, Form, InputGroup, Row, Stack, Table } from "react-bootstrap";
import { IIcon } from "./models/IIcon";
import IconData from "./data/icons.json";
import Image from "./shared/Image";
import { highlightText } from "./utils/stringUtils";
import Paginator from "./shared/paginator";

const Icons : React.FC = () => {
    const [iconData, setIconData] = useState<IIcon[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [pageNumber, setPageNumber] = useState<number>(1);
    const scrollRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const data: IIcon[] = IconData as IIcon[];
        setIconData(data);
    }, []);

    const changePage = (page: number) => {
        const maxPage = Math.floor((IconData.length + 101) / 102);
        if (page < 1) {
            setPageNumber(1);
        } else if (page > maxPage) {
            setPageNumber(maxPage)
        } else {
            setPageNumber(page);
        }        
    }

    const handleSearchChanged = (value: string) => {
        setSearchTerm(value);
        const data: IIcon[] = IconData as IIcon[];
        if(value){
            setIconData(data.filter(x => x.Usages.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setIconData(data);
        }
        changePage(1);
    }

    const executeScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView()
        }
    }

    return (
        <Container id="icons">
            <Stack gap={2}>
                <div id="paginatorTop" ref={scrollRef}>
                    <h2>Icons (BitmapSystemIcons.Icons)</h2>
                </div>
                <div>
                    <InputGroup className="ms-auto" style={{maxWidth: 350, width: "100%"}}>
                        <InputGroup.Text>Search</InputGroup.Text>
                        <Form.Control value={searchTerm} onChange={(e) => handleSearchChanged(e.target.value)} />
                    </InputGroup>
                </div>
                <Row className="gx-3">
                    {iconData.slice((pageNumber -1) * 102, (pageNumber * 102)).map(icon => (
                        <Col key={icon.Usages} xs={6} sm={4} lg={2} className="text-center my-3">
                            <div className="p-2 hoverEffect">
                                <div style={{height: 150, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Image src={icon.Url} alt={icon.Name} style={{width: 50}} />
                                </div>
                                <span style={{fontSize: "80%"}}>{searchTerm ? highlightText(icon.Usages.replace("BitmapSystemIcons.Icons.",""), searchTerm) : icon.Usages.replace("BitmapSystemIcons.Icons.","")}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Paginator
                    recordCount={IconData.length}
                    pageCount={Math.floor((IconData.length + 101) / 102)}
                    pageNumber={pageNumber}
                    onPageChange={(p) => {
                        changePage(p);
                        executeScroll();
                    }}
                />
            </Stack>
        </Container>
    );
}

export default Icons;

