export const mockApiCall = async (): Promise<void> => {
    const delay = Math.random() * 1000 + 1000;

    await new Promise((resolve) => setTimeout(resolve, delay));

    const shouldFail = Math.random() < 0.2;

    if (shouldFail) {
        throw new Error("API Failure");
    }
};