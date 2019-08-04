import styled from "styled-components";
import Icon from "components/Icon";
import PagerItm from "./PagerItm";

const PagerWrp = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.ms(10)} 0;
`;

const Pager = ({ pathName, currentPage, totalPages, pagerOptions }) => (
  <PagerWrp>
    <PagerItm
      page={currentPage - 1}
      text={<Icon type="arrow-left" size="extra-lg" />}
      pathName={pathName}
      disable={currentPage <= 1}
    />

    {pagerOptions.map((itm, indx) => (
      <PagerItm
        key={indx}
        page={itm}
        text={itm}
        pathName={pathName}
        active={currentPage === itm}
      />
    ))}

    <PagerItm
      page={currentPage + 1}
      text={<Icon type="arrow-right" size="extra-lg" />}
      pathName={pathName}
      disable={currentPage >= totalPages}
    />
  </PagerWrp>
);

export default Pager;
