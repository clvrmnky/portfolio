import type { CSSProperties } from 'react'
import styles from './AssetsPage.module.css'
import {
  CornerBracket,
  ScanBar,
  CrosshairMark,
  TickRow,
  InlineSep,
  DiamondMark,
  ArcSegment,
  CircuitTrace,
  DataBracket,
  AnnotationLeader,
  MeasurementLine,
  HorizontalFillBar,
  SegmentedBar,
  GridPatch,
  ScanCursor,
  CartesianGrid,
  ThrustVector,
  ScanHighlight,
  AxisRuler,
  NotationBracket,
  TargetAssembly,
  ScanHeader,
  DataReadout,
  StatusIndicator,
  LabelCallout,
  PanelTag,
  NumberedItem,
  DataColumnStrip,
  LargeReadout,
  FrameTrace,
  QuadrantLabel,
  DataTileStack,
  IdentityModule,
  OperatorRecord,
  SummaryModule,
  CapabilityIndex,
  OperatorProfile,
  RecordHeader,
  MetricReadout,
  CaseCard,
} from '../components/fui'
import { caseStudies } from '../data/caseStudies'

// ── Showcase cell wrapper ──────────────────────────
function Cell({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className={styles.cell}>
      <div className={styles.cellPreview}>{children}</div>
      <span className={styles.cellName}>{name}</span>
    </div>
  )
}

// ── Wide cell for modules ───────────────────────────
function CellWide({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className={styles.cellWide}>
      <div className={styles.cellModulePreview}>{children}</div>
      <span className={styles.cellName}>{name}</span>
    </div>
  )
}

// ── Section wrapper ────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <ScanHeader label={title} width={600} stroke="rgba(0,212,255,0.35)" />
      <div className={styles.grid}>{children}</div>
    </section>
  )
}

export default function AssetsPage() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLed} />
          <span className={styles.headerSys}>SYS_ACTIVE</span>
          <span className={styles.headerSep}>·</span>
          <span className={styles.headerTitle}>FUI_ASSET_ARMY</span>
        </div>
        <div className={styles.headerRight}>
          <span>BUILD · 2026-02-21</span>
          <span className={styles.headerSep}>·</span>
          <span>VER 1.0</span>
        </div>
      </header>

      <main className={styles.main}>

        {/* ── PRIMITIVES ────────────────────── */}
        <Section title="PRIMITIVES">

          <Cell name="CornerBracket · tl">
            <CornerBracket orientation="tl" size={24} />
          </Cell>

          <Cell name="CornerBracket · tr">
            <CornerBracket orientation="tr" size={24} />
          </Cell>

          <Cell name="CornerBracket · bl">
            <CornerBracket orientation="bl" size={24} />
          </Cell>

          <Cell name="CornerBracket · br">
            <CornerBracket orientation="br" size={24} />
          </Cell>

          <Cell name="ScanBar · default">
            <ScanBar width={140} tickCount={14} />
          </Cell>

          <Cell name="ScanBar · dense">
            <ScanBar width={140} tickCount={28} tickHeight={8} />
          </Cell>

          <Cell name="CrosshairMark · sm">
            <CrosshairMark size={28} gap={4} />
          </Cell>

          <Cell name="CrosshairMark · lg">
            <CrosshairMark size={48} gap={7} />
          </Cell>

          <Cell name="TickRow · sparse">
            <TickRow count={12} spacing={8} tickHeight={6} accentEvery={4} />
          </Cell>

          <Cell name="TickRow · dense">
            <TickRow count={24} spacing={4} tickHeight={5} accentEvery={6} />
          </Cell>

          <Cell name="InlineSep · diamond">
            <InlineSep width={120} gap={14} centerMark="diamond" />
          </Cell>

          <Cell name="InlineSep · dot">
            <InlineSep width={120} gap={10} centerMark="dot" />
          </Cell>

          <Cell name="InlineSep · none">
            <InlineSep width={120} gap={20} centerMark="none" />
          </Cell>

          <Cell name="DiamondMark · outline">
            <DiamondMark size={12} filled={false} />
          </Cell>

          <Cell name="DiamondMark · filled">
            <DiamondMark size={12} filled={true} />
          </Cell>

          <Cell name="ArcSegment · top">
            <ArcSegment radius={30} startAngle={-70} endAngle={70} />
          </Cell>

          <Cell name="ArcSegment · ticked">
            <ArcSegment radius={30} startAngle={-60} endAngle={60} tickCount={7} />
          </Cell>

          <Cell name="ArcSegment · 180°">
            <ArcSegment radius={28} startAngle={0} endAngle={180} tickCount={9} />
          </Cell>

          <Cell name="CircuitTrace">
            <CircuitTrace width={100} height={66} />
          </Cell>

          <Cell name="DataBracket · sm">
            <DataBracket width={80} height={18} capHeight={5} />
          </Cell>

          <Cell name="DataBracket · lg">
            <DataBracket width={120} height={28} capHeight={7} />
          </Cell>

          <Cell name="AnnotationLeader · →">
            <AnnotationLeader length={48} direction="right" />
          </Cell>

          <Cell name="AnnotationLeader · ↓">
            <AnnotationLeader length={36} direction="down" />
          </Cell>

          <Cell name="MeasurementLine · sm">
            <MeasurementLine width={80} capHeight={8} />
          </Cell>

          <Cell name="MeasurementLine · lg">
            <MeasurementLine width={140} capHeight={12} />
          </Cell>

          <Cell name="HorizontalFillBar · 72%">
            <HorizontalFillBar width={100} fillPercent={72} />
          </Cell>

          <Cell name="HorizontalFillBar · 35%">
            <HorizontalFillBar width={100} fillPercent={35} fill="rgba(255,140,0,0.6)" stroke="rgba(255,140,0,0.3)" />
          </Cell>

          <Cell name="SegmentedBar · 7/10">
            <SegmentedBar total={10} filled={7} />
          </Cell>

          <Cell name="SegmentedBar · 4/12">
            <SegmentedBar total={12} filled={4} segWidth={4} segHeight={8} />
          </Cell>

          <Cell name="GridPatch · default">
            <GridPatch width={60} height={40} />
          </Cell>

          <Cell name="GridPatch · dense">
            <GridPatch width={60} height={40} dotSize={0.6} spacing={3} fill="rgba(0,212,255,0.18)" />
          </Cell>

          <Cell name="ScanCursor · 60%">
            <ScanCursor width={120} position={60} />
          </Cell>

          <Cell name="ScanCursor · 25%">
            <ScanCursor width={120} position={25} fill="rgba(255,140,0,0.8)" stroke="rgba(255,140,0,0.45)" />
          </Cell>

          <Cell name="CartesianGrid · default">
            <CartesianGrid width={80} height={60} cellSize={10} />
          </Cell>

          <Cell name="CartesianGrid · fine">
            <CartesianGrid width={80} height={60} cellSize={6} intersectionMark={false} stroke="rgba(0,212,255,0.12)" />
          </Cell>

          <Cell name="ThrustVector · →">
            <ThrustVector length={52} direction="right" />
          </Cell>

          <Cell name="ThrustVector · ←">
            <ThrustVector length={52} direction="left" />
          </Cell>

          <Cell name="ScanHighlight · labeled">
            <ScanHighlight width={160} height={14} label="ACTIVE_SCAN" />
          </Cell>

          <Cell name="ScanHighlight · amber">
            <ScanHighlight width={160} height={14} label="ALERT_ZONE" fill="rgba(255,140,0,0.12)" stroke="rgba(255,140,0,0.5)" />
          </Cell>

          <Cell name="AxisRuler · horizontal">
            <AxisRuler length={120} orientation="horizontal" divisions={6} />
          </Cell>

          <Cell name="AxisRuler · vertical">
            <AxisRuler length={80} orientation="vertical" divisions={4} />
          </Cell>

          <Cell name="NotationBracket · left">
            <NotationBracket height={40} side="left" />
          </Cell>

          <Cell name="NotationBracket · right">
            <NotationBracket height={40} side="right" />
          </Cell>

        </Section>

        {/* ── ASSEMBLED ─────────────────────── */}
        <Section title="ASSEMBLED">

          <Cell name="TargetAssembly · bare">
            <TargetAssembly width={120} height={72} cornerSize={16} />
          </Cell>

          <Cell name="TargetAssembly · crosshair">
            <TargetAssembly width={120} height={72} cornerSize={16} crosshair />
          </Cell>

          <Cell name="TargetAssembly · large">
            <TargetAssembly width={180} height={100} cornerSize={22} crosshair />
          </Cell>

          <Cell name="ScanHeader">
            <ScanHeader label="SECTION_LABEL" width={260} />
          </Cell>

          <Cell name="DataReadout · default">
            <DataReadout label="BASE" value="Seattle · 47.6°N" />
          </Cell>

          <Cell name="DataReadout · accent">
            <DataReadout label="STATUS" value="AVAILABLE" accent />
          </Cell>

          <Cell name="StatusIndicator · active">
            <StatusIndicator status="active" label="SYS_ACTIVE · JR-2026" />
          </Cell>

          <Cell name="StatusIndicator · standby">
            <StatusIndicator status="standby" label="STANDBY · IDLE" />
          </Cell>

          <Cell name="StatusIndicator · offline">
            <StatusIndicator status="offline" label="OFFLINE · NO_SIGNAL" />
          </Cell>

          <Cell name="LabelCallout · br">
            <LabelCallout width={60} height={20} leaderDirection="br" label="NODE_A" />
          </Cell>

          <Cell name="LabelCallout · tl">
            <LabelCallout width={60} height={20} leaderDirection="tl" label="SYS_B" />
          </Cell>

          <Cell name="PanelTag · cyan">
            <PanelTag label="OPERATOR_PROFILE" width={120} />
          </Cell>

          <Cell name="PanelTag · amber">
            <PanelTag label="THREAT_LEVEL" width={100} fill="rgba(255,140,0,0.7)" textColor="rgba(20,10,0,0.9)" />
          </Cell>

          <Cell name="NumberedItem · default">
            <NumberedItem index={1} label="DESIGN_TECH" value="ACTIVE" />
          </Cell>

          <Cell name="NumberedItem · accent">
            <NumberedItem index={3} label="AVAILABLE" accent />
          </Cell>

          <Cell name="DataColumnStrip · 9/16">
            <DataColumnStrip count={16} filled={9} />
          </Cell>

          <Cell name="DataColumnStrip · full">
            <DataColumnStrip count={12} filled={12} fillColor="rgba(0,212,255,0.85)" />
          </Cell>

          <Cell name="LargeReadout · number">
            <LargeReadout value="5741" label="STARDATE" />
          </Cell>

          <Cell name="LargeReadout · code">
            <LargeReadout value="JR-26" label="IDENT" width={70} />
          </Cell>

          <Cell name="FrameTrace · sm">
            <FrameTrace width={120} height={70} />
          </Cell>

          <Cell name="FrameTrace · lg">
            <FrameTrace width={180} height={100} />
          </Cell>

          <Cell name="QuadrantLabel · tl">
            <QuadrantLabel corner="tl" lines={['NODE_A', '47.6°N', 'SYS_OK']} />
          </Cell>

          <Cell name="QuadrantLabel · br">
            <QuadrantLabel corner="br" lines={['JR-2026', 'ONLINE', '0.0ms']} />
          </Cell>

          <Cell name="DataTileStack · mixed">
            <DataTileStack tiles={[
              { label: 'DESIGN', accent: true },
              { label: 'FRONTEND' },
              { label: 'SYSTEMS', accent: true },
              { label: 'MOTION' },
            ]} tileWidth={90} />
          </Cell>

          <Cell name="DataTileStack · all-accent">
            <DataTileStack
              tiles={[{ label: 'AVAILABLE', accent: true }, { label: 'SEATTLE', accent: true }]}
              tileWidth={90}
              accentFill="rgba(0,212,255,0.6)"
            />
          </Cell>

        </Section>

        {/* ── MODULES ───────────────────────── */}
        <Section title="MODULES">

          <CellWide name="IdentityModule">
            <IdentityModule
              operator="Justin Ranton"
              classification="Design Technologist"
            />
          </CellWide>

          <CellWide name="OperatorRecord">
            <OperatorRecord
              fields={[
                { key: 'STATUS',  value: 'AVAILABLE',        accent: true },
                { key: 'Q-SLOT',  value: 'Q2 · 2026' },
                { key: 'BASE',    value: 'Seattle · 47.6°N' },
                { key: 'CURRENT', value: 'SmarterDx' },
                { key: 'SYS_ID',  value: 'JR-2026-DT',       dim: true },
              ]}
            />
          </CellWide>

          <CellWide name="CapabilityIndex">
            <CapabilityIndex />
          </CellWide>

          <CellWide name="SummaryModule">
            <SummaryModule
              operator="Justin Ranton"
              classification="Design Technologist"
              tagline="Design for AI systems."
              subTagline="Systems for AI design."
              body="I work at the intersection of design craft and AI infrastructure — building clinical interfaces, reasoning frameworks, and the tools to construct them."
              style={{ '--reveal-delay': '0ms' } as CSSProperties}
            />
          </CellWide>

          <CellWide name="OperatorProfile">
            <OperatorProfile revealDelay={0} />
          </CellWide>

          <CellWide name="CaseCard">
            <CaseCard cs={caseStudies[0]} />
          </CellWide>

        </Section>

        {/* ── COMPOSITION DEMOS ─────────────── */}
        <Section title="COMPOSITIONS">

          {/* Corner bracket quad — framing a zone */}
          <Cell name="Corner quad · tight">
            <div style={{ position: 'relative', width: 80, height: 50 }}>
              <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <CornerBracket orientation="tl" size={12} />
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <CornerBracket orientation="tr" size={12} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <CornerBracket orientation="bl" size={12} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <CornerBracket orientation="br" size={12} />
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontSize: '7px', letterSpacing: '0.2em',
                color: 'rgba(200,230,255,0.45)',
              }}>DATA_ZONE</div>
            </div>
          </Cell>

          {/* Arc + ticks + center mark */}
          <Cell name="Arc instrument">
            <div style={{ position: 'relative', width: 80, height: 80 }}>
              <ArcSegment radius={32} startAngle={-120} endAngle={120} tickCount={11} />
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                <CrosshairMark size={16} gap={3} />
              </div>
            </div>
          </Cell>

          {/* Scan bar + tick row stack */}
          <Cell name="Scan stack">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
              <ScanBar width={140} tickCount={18} tickHeight={8} />
              <TickRow count={20} spacing={7} tickHeight={4} accentEvery={5} />
            </div>
          </Cell>

          {/* Data readouts with inline sep */}
          <Cell name="Data cluster">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <DataReadout label="OPERATOR" value="Justin Ranton" width={160} />
              <InlineSep width={100} gap={8} centerMark="diamond" />
              <DataReadout label="STATUS" value="AVAILABLE" accent width={160} />
            </div>
          </Cell>

          {/* Target assembly with content */}
          <Cell name="Target + data">
            <div style={{ position: 'relative', width: 160, height: 80 }}>
              <TargetAssembly width={160} height={80} cornerSize={14} crosshair />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 3,
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.85)' }}>JR-2026-DT</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '7px', letterSpacing: '0.18em', color: 'rgba(0,212,255,0.65)' }}>DESIGN_TECH</span>
              </div>
            </div>
          </Cell>

          {/* Circuit + scan header */}
          <Cell name="Circuit panel">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <CircuitTrace width={120} height={60} />
              <StatusIndicator status="active" label="CIRCUIT_OK" />
            </div>
          </Cell>

          {/* Annotation callout on a target */}
          <Cell name="Callout rig">
            <div style={{ position: 'relative', width: 120, height: 80 }}>
              <TargetAssembly width={120} height={80} cornerSize={12} />
              <div style={{ position: 'absolute', top: 8, left: 8 }}>
                <LabelCallout width={50} height={16} leaderDirection="br" label="ID_NODE" />
              </div>
              <div style={{ position: 'absolute', bottom: 8, right: 8 }}>
                <LabelCallout width={50} height={16} leaderDirection="tl" label="REF_B" />
              </div>
            </div>
          </Cell>

          {/* Numbered list + fill bars */}
          <Cell name="Status panel">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <PanelTag label="SYSTEM_STATUS" width={130} />
              <div style={{ height: 4 }} />
              <NumberedItem index={1} label="CORE" value="ONLINE" accent width={130} />
              <HorizontalFillBar width={130} fillPercent={94} />
              <NumberedItem index={2} label="COMMS" value="ACTIVE" width={130} />
              <HorizontalFillBar width={130} fillPercent={61} />
              <NumberedItem index={3} label="SHIELDS" value="STANDBY" width={130} />
              <HorizontalFillBar width={130} fillPercent={30} fill="rgba(255,140,0,0.55)" stroke="rgba(255,140,0,0.25)" />
            </div>
          </Cell>

          {/* Grid patch + measurement */}
          <Cell name="Zone measure">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <MeasurementLine width={100} capHeight={10} />
              <GridPatch width={100} height={40} />
              <MeasurementLine width={100} capHeight={10} />
            </div>
          </Cell>

          {/* Segmented bar + data column */}
          <Cell name="Signal column">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <DataColumnStrip count={18} filled={11} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <SegmentedBar total={8} filled={6} segWidth={6} segHeight={10} />
                <SegmentedBar total={8} filled={4} segWidth={6} segHeight={10} />
                <SegmentedBar total={8} filled={2} segWidth={6} segHeight={10} fillColor="rgba(255,140,0,0.6)" emptyColor="rgba(255,140,0,0.1)" />
              </div>
            </div>
          </Cell>

          {/* FrameTrace wrapping content */}
          <Cell name="Frame + content">
            <div style={{ position: 'relative', width: 140, height: 80 }}>
              <FrameTrace width={140} height={80} />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>
                <LargeReadout value="JR-26" label="IDENT" width={56} />
              </div>
            </div>
          </Cell>

          {/* QuadrantLabel corner rig */}
          <Cell name="Quadrant rig">
            <div style={{ position: 'relative', width: 140, height: 80 }}>
              <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <QuadrantLabel corner="tl" lines={['BASE', 'SEA·47N']} />
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <QuadrantLabel corner="tr" lines={['STATUS', 'ACTIVE']} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <QuadrantLabel corner="br" lines={['VER', '1.0.0']} />
              </div>
            </div>
          </Cell>

          {/* Cartesian grid + scan highlight + cursor */}
          <Cell name="Grid scan">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, alignItems: 'flex-start' }}>
              <ScanCursor width={140} position={42} />
              <ScanHighlight width={140} height={10} label="SWEEP_02" />
              <CartesianGrid width={140} height={50} cellSize={10} />
              <AxisRuler length={140} orientation="horizontal" divisions={7} />
            </div>
          </Cell>

          {/* Thrust vectors flanking a readout */}
          <Cell name="Vector readout">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ThrustVector length={36} direction="right" />
              <LargeReadout value="072°" label="HDG" width={52} height={30} />
              <ThrustVector length={36} direction="left" />
            </div>
          </Cell>

          {/* Notation brackets spanning data */}
          <Cell name="Bracket span">
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <NotationBracket height={60} side="left" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <DataReadout label="ROLE" value="DESIGN_TECH" width={120} />
                <DataReadout label="BASE" value="SEATTLE" width={120} />
                <DataReadout label="AVAIL" value="OPEN" accent width={120} />
              </div>
              <NotationBracket height={60} side="right" />
            </div>
          </Cell>

        </Section>

        {/* Footer */}
        <footer className={styles.footer}>
          <InlineSep width={400} gap={20} centerMark="diamond" stroke="rgba(0,212,255,0.20)" />
          <p className={styles.footerText}>
            FUI_ASSET_ARMY · JR-2026-DT · {Object.keys({
              CornerBracket: 1, ScanBar: 1, CrosshairMark: 1, TickRow: 1,
              InlineSep: 1, DiamondMark: 1, ArcSegment: 1, CircuitTrace: 1,
              DataBracket: 1, AnnotationLeader: 1, MeasurementLine: 1,
              HorizontalFillBar: 1, SegmentedBar: 1, GridPatch: 1,
              ScanCursor: 1, CartesianGrid: 1, ThrustVector: 1,
              ScanHighlight: 1, AxisRuler: 1, NotationBracket: 1,
              TargetAssembly: 1, ScanHeader: 1, DataReadout: 1,
              StatusIndicator: 1, LabelCallout: 1, PanelTag: 1,
              NumberedItem: 1, DataColumnStrip: 1, LargeReadout: 1,
              FrameTrace: 1, QuadrantLabel: 1, DataTileStack: 1,
              IdentityModule: 1, OperatorRecord: 1, SummaryModule: 1,
              CapabilityIndex: 1, OperatorProfile: 1,
              RecordHeader: 1, MetricReadout: 1, CaseCard: 1,
            }).length} COMPONENTS REGISTERED
          </p>
        </footer>

      </main>
    </div>
  )
}
