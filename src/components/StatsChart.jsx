import React, { useEffect, useRef } from 'react';
import './StatsChart.css';

const StatsChart = ({ player, format }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    renderChart();
  }, [player, format]);
  
  const renderChart = () => {
    if (!chartRef.current) return;
    
    // In a real application, we would use a charting library like Chart.js or D3
    // For now, we'll create a visual representation using div elements
    chartRef.current.innerHTML = '';
    
    const battingStats = player.batting[format];
    const maxValue = Math.max(battingStats.runs, battingStats.strikeRate * 10);
    
    // Create chart bars
    const createBar = (label, value, color) => {
      const percentage = (value / maxValue) * 100;
      
      const barContainer = document.createElement('div');
      barContainer.className = 'chart-bar-container';
      
      const labelElement = document.createElement('div');
      labelElement.className = 'chart-bar-label';
      labelElement.textContent = label;
      
      const barWrapper = document.createElement('div');
      barWrapper.className = 'chart-bar-wrapper';
      
      const bar = document.createElement('div');
      bar.className = `chart-bar ${color}`;
      bar.style.width = '0%';
      
      const valueElement = document.createElement('span');
      valueElement.className = 'chart-bar-value';
      valueElement.textContent = value.toLocaleString();
      
      bar.appendChild(valueElement);
      barWrapper.appendChild(bar);
      barContainer.appendChild(labelElement);
      barContainer.appendChild(barWrapper);
      chartRef.current?.appendChild(barContainer);
      
      // Animate width
      setTimeout(() => {
        bar.style.width = `${percentage}%`;
      }, 100);
    };
    
    createBar('Runs', battingStats.runs, 'bg-emerald-600');
    createBar('Average', battingStats.average, 'bg-blue-600');
    createBar('Strike Rate', battingStats.strikeRate, 'bg-amber-500');
    createBar('Hundreds', battingStats.hundreds, 'bg-purple-600');
    createBar('Fifties', battingStats.fifties, 'bg-pink-500');
  };
  
  return (
    <div className="stats-chart">
      <h3 className="stats-chart-title">
        Performance Chart ({format.toUpperCase()})
      </h3>
      <div ref={chartRef} className="mt-4"></div>
    </div>
  );
};

export default StatsChart;
