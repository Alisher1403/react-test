export type PaginationParams = {
  skip: number;
  limit: number;
};

type PaginatedResponse = PaginationParams & {
  total: number;
};

export function getNextPageParam(page: PaginatedResponse) {
  const nextSkip = page.skip + page.limit;
  if (nextSkip >= page.total) return undefined;

  return {
    skip: nextSkip,
    limit: page.limit,
  };
}
