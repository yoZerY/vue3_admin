const whiteTags = ['/login', '/401', '/404']

export function isTag(path) {
  return !whiteTags.includes(whiteTags)
}
