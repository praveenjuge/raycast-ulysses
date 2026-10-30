import { closeMainWindow, getApplications, open, showToast, Toast } from "@raycast/api";

async function isUlyssesInstalled() {
  const applications = await getApplications();
  return applications.some(
    ({ bundleId }) => bundleId === "com.ulyssesapp.mac" || bundleId === "com.soulmen.ulysses-setapp",
  );
}

export async function openUlyssesCallback(url: string) {
  if (!(await isUlyssesInstalled())) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Ulysses is not installed.",
      message: "Install it from: https://ulysses.app",
    });
    return;
  } else {
    await closeMainWindow();
    await open(url);
  }
}
