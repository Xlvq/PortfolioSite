import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaTelegramPlane, FaVk, FaGithub } from 'react-icons/fa';

/* ---------- styled ---------- */

const Main = styled.main`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const TextBlock = styled.div`
    flex: 1;
    min-width: 260px;
`;

const BtnRow = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-top: 1rem;
`;

const ContactBtn = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid transparent;
    color: var(--text);
    background: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.12);
    transition: background 0.25s, border-color 0.25s, transform 0.25s;

    &:hover {
        transform: translateY(-2px);
        background: rgba(0, 0, 0, 0.07);
    }

    /* тёмная тема ─ голографическая «таблетка» */
    [data-theme='dark'] & {
        background: var(--nav-active-bg);
        border-color: transparent;
        color: var(--nav-active-text);
        &:hover {
            background: var(--nav-active-bg);
        }
    }
`;

const MapWrap = styled.div`
  flex: 1;
  min-width: 300px;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const YMap = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
`;

/* ---------- component ---------- */

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <Main>
            {/* ---- левый столбец ---- */}
            <TextBlock>
                <h1>{t('contacts.title')}</h1>
                <p>{t('contacts.desc')}</p>

                <BtnRow>
                    <ContactBtn
                        href="https://t.me/xnilivq"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Telegram"
                    >
                        <FaTelegramPlane /> Telegram
                    </ContactBtn>

                    <ContactBtn
                        href="https://vk.com/xnlveeeee"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="VK"
                    >
                        <FaVk /> VK
                    </ContactBtn>

                    <ContactBtn
                        href="https://github.com/Xlvq"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub /> GitHub
                    </ContactBtn>
                </BtnRow>
            </TextBlock>

            {/* ---- правый столбец ---- */}
            <MapWrap>
                <YMap
                    title="Cofix map"
                    allowFullScreen
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=104.290578%2C52.273361&mode=poi&poi%5Bpoint%5D=104.290710%2C52.273295&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D109157493373&z=19.4"
                />
            </MapWrap>
        </Main>
    );
}
