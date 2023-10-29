export interface PackageStats {
  start: string;
  end: string;
  package: string;
  downloads: {
    downloads: number;
    day: string;
  }[];
  totalDownloads: number;
  yearlyDownloads: number;
  monthlyDownloads: number;
  weeklyDownloads: number;
  dailyDownloads: number;
}

export async function getPackageStats(
  packageName: string
): Promise<PackageStats> {
  const veryOldDate = "2010-01-01";
  const today = new Date().toISOString().split("T")[0];
  const url = `https://api.npmjs.org/downloads/range/${veryOldDate}:${today}/${packageName}`;
  const res = await fetch(url);
  const data = await res.json();
  const totalDownloads = data.downloads.reduce(
    (acc: number, { downloads }: { downloads: number }) => acc + downloads,
    0
  );
  // calculate yearly, monthly, weekly, daily downloads
  const todayDate = new Date();
  const oneYearAgo = new Date(
    todayDate.getFullYear() - 1,
    todayDate.getMonth(),
    todayDate.getDate()
  );
  const oneMonthAgo = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth() - 1,
    todayDate.getDate()
  );
  const oneWeekAgo = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 7
  );
  const oneDayAgo = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 1
  );
  const yearlyDownloads = data.downloads
    .filter(({ day }: { day: string }) => new Date(day) > oneYearAgo)
    .reduce(
      (acc: number, { downloads }: { downloads: number }) => acc + downloads,
      0
    );
  const monthlyDownloads = data.downloads
    .filter(({ day }: { day: string }) => new Date(day) > oneMonthAgo)
    .reduce(
      (acc: number, { downloads }: { downloads: number }) => acc + downloads,
      0
    );
  const weeklyDownloads = data.downloads
    .filter(({ day }: { day: string }) => new Date(day) > oneWeekAgo)
    .reduce(
      (acc: number, { downloads }: { downloads: number }) => acc + downloads,
      0
    );
  const dailyDownloads = data.downloads
    .filter(({ day }: { day: string }) => new Date(day) > oneDayAgo)
    .reduce(
      (acc: number, { downloads }: { downloads: number }) => acc + downloads,
      0
    );
  return {
    ...data,
    totalDownloads,
    yearlyDownloads,
    monthlyDownloads,
    weeklyDownloads,
    dailyDownloads,
  };
}
