let timeoutId = null;
export function debounce(func, param) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  setTimeout(() => {
    func(param);
  }, 2000);
}
