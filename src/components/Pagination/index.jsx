import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import Head from "next/head";
import { perPage } from "config";
import Pager from "./Pager";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ router, pageInfo = true, pagination = true }) => {
  const pathName = router.query.pathname;
  const currentPage = parseInt(router.query.page || 1);

  const getPagerOptions = (current, total, pages) => {
    const defaultOptions = {
      rule: (_, index) => ++index,
      length: pages,
      end: [],
      start: [],
      reverse: false
    };

    const showAll = total - pages <= 0;
    if (showAll) {
      return {
        ...defaultOptions,
        length: total
      };
    }

    const pageShow = pages - 2;
    const pagerMiddle = Math.ceil(pageShow / 2);
    const startPosition = current - pagerMiddle;
    const endPosition = current + pagerMiddle;
    const paginationStart = startPosition > 1 ? [1, null] : [1];
    const paginationEnd = endPosition - total < 0 ? [null, total] : [total];

    if (startPosition <= 2) {
      return {
        ...defaultOptions,
        end: paginationEnd,
        length: pageShow + 1
      };
    }

    if (endPosition > total) {
      return {
        ...defaultOptions,
        rule: (_, index) => total - index,
        start: paginationStart,
        length: pageShow + 1,
        reverse: true
      };
    }

    return {
      ...defaultOptions,
      rule: (_, index) => {
        return current + (pagerMiddle - index - 1);
      },
      length: pageShow,
      reverse: true,
      start: paginationStart,
      end: paginationEnd
    };
  };

  const getPager = totalPagesAmount => {
    const pagerOptions = getPagerOptions(currentPage, totalPagesAmount, 7);
    const pager = new Array(pagerOptions.length)
      .fill(null)
      .map(pagerOptions.rule);

    if (pagerOptions.reverse) {
      pager.reverse();
    }

    return [...pagerOptions.start, ...pager, ...pagerOptions.end];
  };
  return (
    <>
      <Query query={PAGINATION_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return "loading";
          if (error) return "error";
          const totalCount = data.productsConnection.aggregate.count;
          const totalPages = Math.ceil(totalCount / perPage);
          const pagerOptions = getPager(totalPages);
          return (
            <>
              <Head>
                <title>olololo | {currentPage}</title>
              </Head>
              {pageInfo && (
                <>
                  <p>Total products: {totalCount}</p>
                  <p>
                    Page {currentPage} of {totalPages}
                  </p>
                </>
              )}

              {pagination && (
                <Pager
                  currentPage={parseInt(currentPage)}
                  pagerOptions={pagerOptions}
                  totalPages={totalPages}
                  pathName={pathName}
                  totalCount={totalCount}
                />
              )}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default withRouter(Pagination);
