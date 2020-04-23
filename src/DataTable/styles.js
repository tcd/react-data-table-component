import merge from 'deepmerge';
import { defaultThemes } from './themes';

export const defaultStyles = theme => ({
  table: {
    style: {
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  tableWrapper: {
    style: {
      display: 'table',
    },
  },
  header: {
    style: {
      fontSize: '22px',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
      minHeight: '56px',
      paddingLeft: '16px',
      paddingRight: '8px',
    },
  },
  subHeader: {
    style: {
      backgroundColor: theme.background.default,
      minHeight: '52px',
    },
  },
  head: {
    style: {},
  },
  headRow: {
    style: {
      backgroundColor: theme.background.default,
      minHeight: '56px',
      borderBottomWidth: '1px',
      borderBottomColor: theme.divider.default,
      borderBottomStyle: 'solid',
    },
    denseStyle: {
      minHeight: '32px',
    },
  },
  headCells: {
    style: {
      fontSize: '12px',
      fontWeight: 500,
      color: theme.text.primary,
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    activeSortStyle: {
      color: theme.text.primary,
      '&:focus': {
        outline: 'none',
      },
      '&:hover:not(:focus)': {
        color: theme.sortFocus.default,
      },
    },
    inactiveSortStyle: {
      '&:focus': {
        outline: 'none',
        color: theme.sortFocus.default,
      },
      '&:hover': {
        color: theme.sortFocus.default,
      },
    },
  },
  contextMenu: {
    style: {
      backgroundColor: theme.context.background,
      fontSize: '18px',
      fontWeight: 400,
      color: theme.context.text,
      paddingLeft: '16px',
      paddingRight: '8px',
      transform: 'translate3d(0, -100%, 0)',
      transitionDuration: '125ms',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      willChange: 'transform',
    },
    activeStyle: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  cells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      wordBreak: 'break-word',
    },
  },
  rows: {
    style: {
      fontSize: '13px',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
      minHeight: '48px',
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: theme.divider.default,
      },
    },
    denseStyle: {
      minHeight: '32px',
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      '&:nth-of-type(n)': {
        color: theme.selected.text,
        backgroundColor: theme.selected.default,
        borderBottomColor: theme.background.default,
      },
    },
    highlightOnHoverStyle: {
      color: theme.highlightOnHover.text,
      backgroundColor: theme.highlightOnHover.default,
      transitionDuration: '0.15s',
      transitionProperty: 'background-color',
      borderBottomColor: theme.background.default,
      outlineStyle: 'solid',
      outlineWidth: '1px',
      outlineColor: theme.background.default,
    },
    stripedStyle: {
      '&:nth-of-type(odd)': {
        color: theme.striped.text,
        backgroundColor: theme.striped.default,
      },
    },
  },
  expanderRow: {
    style: {
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  expanderCell: {
    style: {
      flex: '0 0 48px',
    },
  },
  expanderButton: {
    style: {
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: 'transparent',
      borderRadius: '2px',
      transition: '0.25s',
      height: '100%',
      width: '100%',
      '&:hover:enabled': {
        cursor: 'pointer',
      },
      '&:disabled': {
        color: theme.button.disabled,
      },
      '&:hover:not(:disabled)': {
        cursor: 'pointer',
        backgroundColor: theme.button.hover,
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.button.focus,
      },
      svg: {
        margin: 'auto',
      },
    },
  },
  pagination: {
    style: {
      color: theme.text.secondary,
      fontSize: '13px',
      minHeight: '56px',
      backgroundColor: theme.background.default,
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: theme.divider.default,
    },
    pageButtonsStyle: {
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '8px',
      margin: 'px',
      cursor: 'pointer',
      transition: '0.4s',
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: 'transparent',
      '&:disabled': {
        cursor: 'unset',
        color: theme.button.disabled,
        fill: theme.button.disabled,
      },
      '&:hover:not(:disabled)': {
        backgroundColor: theme.button.hover,
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.button.focus,
      },
    },
  },
  noData: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  progress: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
});

export const createStyles = (customStyles = {}, theme = 'default') => {
  const themeType = defaultThemes[theme] ? theme : 'default';

  return merge(defaultStyles(defaultThemes[themeType]), customStyles);
};
