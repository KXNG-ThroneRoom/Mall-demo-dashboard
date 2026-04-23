import { AlertsAndInsight, IntentLeadStatusGrid, MetricGrid, OverviewCharts, RealTimeFeed } from "@/components/dashboard-widgets";
import { MotionShell } from "@/components/motion-shell";

export default function OverviewPage() {
  return (
    <MotionShell>
      <div className="space-y-4">
        <MetricGrid />
        <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
          <div className="space-y-4">
            <OverviewCharts />
            <IntentLeadStatusGrid />
            <AlertsAndInsight />
          </div>
          <RealTimeFeed />
        </div>
      </div>
    </MotionShell>
  );
}
