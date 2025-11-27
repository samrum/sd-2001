import AjaxHelper from "./AjaxHelper";

export async function fetchDeals({ groupBy = "" } = {}) {
  const dealsApi = import.meta.env.VITE_DEALS_API || "/";

  let queryString = "";
  const queryParams = [];

  if (groupBy.length) {
    queryParams.push(`groupBy=${groupBy}`);
  }

  if (queryParams.length) {
    queryString = "?" + queryParams.join("&");
  }

  const dealData = await AjaxHelper(`${dealsApi}${queryString}`);

  return dealData;
}
