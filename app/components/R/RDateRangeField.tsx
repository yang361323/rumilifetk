import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

// --- 工具函数 ---
const formatDate = (date: Date | null) => {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const parseDate = (str: string) => {
  if (!str) return null;
  return new Date(str);
};

const isSameDay = (d1: Date | null, d2: Date | null) => {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const isInRange = (date: Date, start: Date | null, end: Date | null) => {
  if (!start || !end) return false;
  const t = date.getTime();
  return (
    t > Math.min(start.getTime(), end.getTime()) &&
    t < Math.max(start.getTime(), end.getTime())
  );
};

export interface RDateRangeFieldProps {
  startDate?: string;
  endDate?: string;
  onChange?: (start: string | null, end: string | null) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const RDateRangeField: React.FC<RDateRangeFieldProps> = ({
  startDate,
  endDate,
  onChange,
  className = "",
  style,
  disabled = false,
}) => {
  // 获取今天日期
  const today = new Date();
  const todayStr = formatDate(today);

  // 如果父组件传入了值，使用传入的值，否则默认为今天
  const initialStart = startDate ? parseDate(startDate) : today;
  const initialEnd = endDate ? parseDate(endDate) : today;

  const [start, setStart] = useState<Date | null>(initialStart);
  const [end, setEnd] = useState<Date | null>(initialEnd);

  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // 同步外部 props 变化
  useEffect(() => {
    if (startDate || endDate) {
      setStart(startDate ? parseDate(startDate) : today);
      setEnd(endDate ? parseDate(endDate) : today);
    }
  }, [startDate, endDate]);

  // 初始化时通知父组件默认值（可选，根据业务需求决定是否需要自动触发 onChange）
  useEffect(() => {
    if (!startDate && !endDate) {
      onChange?.(todayStr, todayStr);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleQuickSelect = (
    type: "today" | "yesterday" | "week" | "month",
  ) => {
    const now = new Date();
    let newStart: Date | null = null;
    let newEnd: Date | null = null;

    switch (type) {
      case "today":
        newStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        newEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case "yesterday":
        const yest = new Date(now);
        yest.setDate(now.getDate() - 1);
        newStart = yest;
        newEnd = yest;
        break;
      case "week":
        const dayOfWeek = now.getDay();
        const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Monday start
        newStart = new Date(now.setDate(diff));
        newEnd = new Date();
        break;
      case "month":
        newStart = new Date(now.getFullYear(), now.getMonth(), 1);
        newEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
    }

    setStart(newStart);
    setEnd(newEnd);
    onChange?.(formatDate(newStart), formatDate(newEnd));
    setIsOpen(false);
  };

  const handleDayClick = (year: number, month: number, day: number) => {
    const clickedDate = new Date(year, month, day);

    if (!start || (start && end)) {
      setStart(clickedDate);
      setEnd(null);
    } else {
      if (clickedDate < start) {
        setEnd(start);
        setStart(clickedDate);
      } else {
        setEnd(clickedDate);
        setIsOpen(false);
        onChange?.(formatDate(start), formatDate(clickedDate));
      }
    }
  };

  const renderCalendar = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++)
      days.push(<div key={`e-${i}`} className={styles["day-empty"]} />);

    for (let d = 1; d <= daysInMonth; d++) {
      const current = new Date(year, month, d);
      const isStart = isSameDay(current, start);
      const isEnd = isSameDay(current, end);
      const inRange = isInRange(current, start, end);

      let className = styles["day"];
      if (isStart) className += ` ${styles["start"]}`;
      if (isEnd) className += ` ${styles["end"]}`;
      if (inRange) className += ` ${styles["in-range"]}`;
      if (isStart && isEnd) className += ` ${styles["single-day"]}`;

      days.push(
        <div
          key={d}
          className={className}
          onClick={() => handleDayClick(year, month, d)}
        >
          {d}
        </div>,
      );
    }
    return days;
  };

  const displayText = `${start ? formatDate(start) : "开始日期"} ~ ${end ? formatDate(end) : "结束日期"}`;

  return (
    <div
      ref={containerRef}
      className={`${styles["r-date-range-field"]} ${className}`}
      style={style}
    >
      <div
        className={`${styles["trigger-input"]} ${isOpen ? styles["focused"] : ""} ${disabled ? styles["disabled"] : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={styles["input-text"]}>{displayText}</span>
        <svg className={styles["icon"]} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <div className={styles["popover"]}>
          <div className={styles["popover-content"]}>
            {/* 左侧快捷菜单 */}
            <div className={styles["quick-menu"]}>
              <button
                className={styles["quick-btn"]}
                onClick={() => handleQuickSelect("today")}
              >
                今天
              </button>
              <button
                className={styles["quick-btn"]}
                onClick={() => handleQuickSelect("yesterday")}
              >
                昨天
              </button>
              <button
                className={styles["quick-btn"]}
                onClick={() => handleQuickSelect("week")}
              >
                本周
              </button>
              <button
                className={styles["quick-btn"]}
                onClick={() => handleQuickSelect("month")}
              >
                本月
              </button>
            </div>

            {/* 右侧日历 */}
            <div className={styles["calendar-wrapper"]}>
              <div className={styles["calendar-header"]}>
                <button
                  onClick={() =>
                    setViewDate(
                      new Date(
                        viewDate.getFullYear(),
                        viewDate.getMonth() - 1,
                        1,
                      ),
                    )
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span>
                  {viewDate.getFullYear()}年 {viewDate.getMonth() + 1}月
                </span>
                <button
                  onClick={() =>
                    setViewDate(
                      new Date(
                        viewDate.getFullYear(),
                        viewDate.getMonth() + 1,
                        1,
                      ),
                    )
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className={styles["calendar-grid"]}>
                <div className={styles["week-header"]}>
                  {["日", "一", "二", "三", "四", "五", "六"].map((w) => (
                    <div key={w} className={styles["week-day"]}>
                      {w}
                    </div>
                  ))}
                </div>
                <div className={styles["days-grid"]}>{renderCalendar()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RDateRangeField;
