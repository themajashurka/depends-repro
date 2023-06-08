export async function load({ depends }) {
  depends("load:child");
  console.log("child load runs");

  return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: () => {
    return {};
  },
};
