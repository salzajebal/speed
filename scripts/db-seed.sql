--
-- PostgreSQL database dump
--

\restrict hO4JdQefyYnGnPyQuDrSB6K6wdmT9GPS09mlk04BEvqRMPHipQyEpsgglBLCFRH

-- Dumped from database version 16.10
-- Dumped by pg_dump version 16.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: consultations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consultations (
    id integer NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    age_range text,
    income_type text,
    amount text,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: consultations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consultations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consultations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consultations_id_seq OWNED BY public.consultations.id;


--
-- Name: settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.settings (
    key text NOT NULL,
    value text,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: consultations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations ALTER COLUMN id SET DEFAULT nextval('public.consultations_id_seq'::regclass);


--
-- Data for Name: consultations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.consultations (id, name, phone, age_range, income_type, amount, created_at) FROM stdin;
3	테스트3	010-0003-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.317504
4	테스트4	010-0004-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.369711
5	테스트5	010-0005-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.424559
6	테스트6	010-0006-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.47822
7	테스트7	010-0007-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.531212
8	테스트8	010-0008-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.583906
9	테스트9	010-0009-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.639185
10	테스트10	010-00010-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.689524
11	테스트11	010-00011-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.740201
12	테스트12	010-00012-0000	30대	직장 소득 있음	500~1000만원	2026-06-07 10:11:46.790831
13	테스트	010-0000-0000	30대	직장인	1000만원	2026-06-07 10:47:58.282031
14	홈페이지테스트	010-1234-5678	30대	직장인	500만원	2026-06-07 11:01:08.510238
15	테스트	010-9999-0001	30대	직장인	500만원	2026-06-11 04:12:19.887137
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.settings (key, value, updated_at) FROM stdin;
\.
-- 참고: 텔레그램 봇 토큰, 채팅방 ID, 카카오링크는 어드민에서 직접 설정하세요.


--
-- Name: consultations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.consultations_id_seq', 15, true);


--
-- Name: consultations consultations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consultations
    ADD CONSTRAINT consultations_pkey PRIMARY KEY (id);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (key);


--
-- Name: consultations_phone_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX consultations_phone_unique ON public.consultations USING btree (phone);


--
-- PostgreSQL database dump complete
--

\unrestrict hO4JdQefyYnGnPyQuDrSB6K6wdmT9GPS09mlk04BEvqRMPHipQyEpsgglBLCFRH

