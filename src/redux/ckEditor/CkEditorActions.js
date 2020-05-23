

const GET_EDITOR_CONTENT = "GET_EDITOR_CONTENT";
 

export const actionTypes = { GET_EDITOR_CONTENT };

export function EditorContent(content) {
    return { type: actionTypes.GET_EDITOR_CONTENT, payload:content };
  }
