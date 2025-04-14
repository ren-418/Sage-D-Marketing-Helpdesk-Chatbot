import { UserSession } from '../components/SIA/types';

const SESSION_KEY = 'sia_session';

export const saveSession = (session: UserSession) => {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.error('Error saving session:', error);
  }
};

export const loadSession = (): UserSession | null => {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error('Error loading session:', error);
    return null;
  }
};

export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error('Error clearing session:', error);
  }
};

export const updateSession = (updates: Partial<UserSession>) => {
  const currentSession = loadSession();
  if (currentSession) {
    saveSession({
      ...currentSession,
      ...updates,
      lastInteraction: new Date()
    });
  }
}; 