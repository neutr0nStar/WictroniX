import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StartupChart() {
  return (
    <div data-aos="fade-left" style={{ flex: 6 }}>
      <Chart
        options={{
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ]}
        type="bar"
        //   width={500}
        height={400}
      />
    </div>
  );
}
