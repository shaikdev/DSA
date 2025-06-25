// TODO: Two strings are isomorphic if you can change the letters of one to make the other — but the pattern must stay same!

const s = "egg";
const t = "add";

const isIsomorphic = (s, t) => {
  let map1 = new Map();
  let map2 = new Map();

  if (s.length !== t.length) return false;
  for (i = 0; i < t.length; i++) {
    let a = s[i];
    let b = t[i];
    if (!map1.has(a) && !map2.has(b)) {
      map1.set(a, b);
      map2.set(b, a);
    } else if (map1.get(a) !== b || map2.get(b) !== a) return false;
  }
  return true;
};

console.log(isIsomorphic(s, t));
