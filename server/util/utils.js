export function processStats(totalCount, domainTypes) {
  let data = [];
  let categories = [];

  for (let item of domainTypes) {
    categories.push(`.${item.tld}`.toUpperCase());
    data.push({name:`.${item.tld}`.toUpperCase(),
               y: parseInt(`${((item.count/totalCount)*100).toFixed(2)}`) })
  }

  return {
    xAxis: {
      categories,
    },
    series: [{
      data,
    }],
  };
}
