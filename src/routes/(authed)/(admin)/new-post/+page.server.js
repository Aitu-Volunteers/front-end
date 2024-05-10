export const load = async ({ parent }) => {
    await parent();
}

export const ssr = false;
export const csr = true;