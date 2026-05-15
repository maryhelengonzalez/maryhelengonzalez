import { useState, useMemo, useRef, useEffect } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

export default function AnalyticsPage() {
  const [month, setMonth] = useState("this");

  const lineRef = useRef(null);
  const sankeyRef = useRef(null);

  /* ================= LINE DATA ================= */
  const trendData = useMemo(() => {
    return month === "this"
      ? [120, 180, 150, 200, 170, 220, 260]
      : [100, 140, 160, 180, 190, 210, 230];
  }, [month]);

  /* ================= LINE GRAPH ================= */
  useEffect(() => {
    const width = 600;
    const height = 180;

    const svg = d3.select(lineRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 10, right: 20, bottom: 25, left: 35 };

    const xScale = d3
      .scaleLinear()
      .domain([0, trendData.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(trendData)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((_, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    svg
      .append("path")
      .datum(trendData)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .selectAll("circle")
      .data(trendData)
      .enter()
      .append("circle")
      .attr("cx", (_, i) => xScale(i))
      .attr("cy", (d) => yScale(d))
      .attr("r", 3)
      .attr("fill", "#60a5fa");

    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(trendData.length)
      .tickFormat((d, i) => labels[i]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .attr("color", "#94a3b8");

    const yAxis = d3
      .axisLeft(yScale)
      .ticks(4)
      .tickFormat((d) => `$${d}`);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis)
      .attr("color", "#94a3b8");
  }, [trendData]);

  /* ================= SANKEY DATA ================= */
  const sankeyData = useMemo(() => {
    return {
      nodes: [
        { name: "Income" },
        { name: "Rent" },
        { name: "Food" },
        { name: "Transport" },
        { name: "Shopping" },
        { name: "Savings" },
      ],
      links: [
        { source: 0, target: 1, value: 1200 },
        { source: 0, target: 2, value: 600 },
        { source: 0, target: 3, value: 300 },
        { source: 0, target: 4, value: 400 },
        { source: 0, target: 5, value: 700 },
      ],
    };
  }, []);

  /* ================= SANKEY GRAPH ================= */
  useEffect(() => {
    const width = 600;
    const height = 180;

    const svg = d3.select(sankeyRef.current);
    svg.selectAll("*").remove();

    const sankeyGen = sankey()
      .nodeWidth(10)
      .nodePadding(10)
      .extent([
        [10, 10],
        [width - 10, height - 10],
      ]);

    const graph = sankeyGen({
      nodes: sankeyData.nodes.map((d) => Object.assign({}, d)),
      links: sankeyData.links.map((d) => Object.assign({}, d)),
    });

    svg
      .append("g")
      .selectAll("path")
      .data(graph.links)
      .enter()
      .append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", "#60a5fa")
      .attr("stroke-opacity", 0.25)
      .attr("stroke-width", (d) => Math.max(1, d.width));

    svg
      .append("g")
      .selectAll("rect")
      .data(graph.nodes)
      .enter()
      .append("rect")
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("fill", "#3b82f6")
      .attr("rx", 2);

    svg
      .append("g")
      .selectAll("text")
      .data(graph.nodes)
      .enter()
      .append("text")
      .attr("x", (d) => d.x0 + 5)
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("fill", "white")
      .style("font-size", "10px")
      .text((d) => d.name);
  }, [sankeyData]);

  /* ================= UI ================= */
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>A Deep Dive Into Your Spending</h1>

      {/* TABS */}
      <div style={styles.tabs}>
        <button
          onClick={() => setMonth("this")}
          style={{
            ...styles.tab,
            background: month === "this" ? "#3b82f6" : "transparent",
          }}
        >
          This Month
        </button>

        <button
          onClick={() => setMonth("last")}
          style={{
            ...styles.tab,
            background: month === "last" ? "#3b82f6" : "transparent",
          }}
        >
          Last Month
        </button>
      </div>

      {/* LINE GRAPH */}
      <div style={styles.card}>
        <h3>Spending Trend</h3>
        <svg ref={lineRef} width={600} height={180} />
      </div>

      {/* SANKEY (SMALL WIDGET) */}
      <div style={styles.card}>
        <h3>Money Flow (Sankey)</h3>
        <svg ref={sankeyRef} width={600} height={180} />
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    color: "white",
    padding: "20px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },

  tab: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    cursor: "pointer",
  },

  card: {
    background: "#0f172a",
    padding: "16px",
    borderRadius: "14px",
    marginBottom: "15px",
  },
};