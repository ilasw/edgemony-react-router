export const ENDPOINTS = {
  BASE: `https://www.themealdb.com/api/json/v1/1`,
  get SEARCH() {
    return `${this.BASE}/search.php`;
  },
  get FILTER() {
    return `${this.BASE}/filter.php`;
  },
  get CATEGORIES() {
    return `${this.BASE}/categories.php`;
  },
};
