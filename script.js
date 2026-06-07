/**
 * ============================================================
 * 양예란 자기소개 페이지 - 동작 스크립트
 * 참고 스타일: https://hyerrin.github.io/portfolio/
 * ============================================================
 *
 * [이 파일의 역할]
 * - profile.txt 내용을 화면에 채우기
 * - About 슬라이더, 장점/단점 탭 전환
 * - 스크롤 진행 바, 맨 위로 버튼, 메뉴 강조
 *
 * [리팩토링 팁]
 * PROFILE_DATA 객체만 수정하면 소개 내용을 한곳에서 관리할 수 있습니다.
 */

'use strict';

/* ------------------------------------------------------------
   1. 프로필 데이터 (profile.txt 내용)
   ------------------------------------------------------------ */
const PROFILE_DATA = {
  about: [
    { label: '이름', value: '양예란' },
    { label: '경력', value: '3년 11개월 (백엔드 개발 / 빅데이터 처리)' },
    { label: '학력', value: '경북대학교 생명과학부 생물학 학사' },
    { label: '자격증', value: '정보처리기사 · AWS SAA · RHCSA' },
  ],

  slides: [
    {
      type: 'intro',
      label: 'Introduction',
      title: '대규모 데이터를 다루는 개발자',
      text: '비전공자로 시작했지만, 대규모 데이터를 다루는 여러 사업을 통해 실력을 검증받으며 성장한 개발자입니다. 실시간·배치 데이터 처리, 성능 최적화, 장애 분석, 자동화 스크립트 개발 경험을 보유하고 있습니다.',
    },
    {
      type: 'motivation',
      label: 'Motivation',
      title: '지원 동기',
      text: '빅데이터 플랫폼과 교통 정보 시스템 분야의 정부 사업에 참여하며 교통, 항공, 해양, 위험물 등 다양한 분야의 분석·통계 시스템 개발·운영 역량을 쌓았습니다. Hadoop, Storm, Flink, Kafka 등 오픈소스 기반 빅데이터 환경 경험을 바탕으로 의미 있는 프로젝트에 기여하고 싶습니다.',
    },
    {
      type: 'philosophy',
      label: 'Skills',
      title: '보유 기술',
      text: 'Java, Python, C++, PHP, JavaScript · PostgreSQL, HBase, Tibero · Hadoop, Storm, Flink, Kafka · Kubernetes, KVM · Shell Script 자동화, MR 기반 분석, geoJson/shp 공간 데이터 처리',
    },
  ],

  strengths: [
    {
      title: '꾸준한 학습 의지',
      description:
        '새로운 기술 트렌드에 관심이 많아 개인 시간을 활용해 온라인 강의를 수강하고 사이드 프로젝트를 진행합니다.',
    },
    {
      title: '협업과 소통',
      description:
        '팀 프로젝트에서 다른 개발자, 디자이너, 기획자와 원활히 소통하며 공동의 목표를 달성하는 것을 중요하게 생각합니다.',
    },
    {
      title: '문제 해결 지향적',
      description:
        '복잡한 버그나 기술적 이슈에 직면했을 때 포기하지 않고 다양한 접근 방법을 시도하여 해결책을 찾습니다.',
    },
  ],

  weaknesses: [
    {
      title: '완벽주의 성향',
      description:
        '때로는 코드의 완성도에 지나치게 집착하여 일정에 영향을 줄 수 있습니다. 이를 개선하기 위해 우선순위를 명확히 하고 적정 수준의 완성도를 목표로 하는 연습을 하고 있습니다.',
    },
  ],

  experiences: [
    {
      emoji: '🚕',
      thumbClass: 'project-thumb--tims',
      title: '택시 운행정보 관리시스템(TIMS)',
      period: '2021.05 ~ 2024.03',
      description:
        '통계 프로그램 고도화, 앱미터 통계 분석 프로그램 개선, HBase 데이터 마이그레이션, Cloudera → Ambari 플랫폼 이관 및 안정화 지원. 대규모 파일 처리 스크립트 개선, MR 불일치 코드 점검, 운영 오류 로그 분석 및 재처리 가이드 제공.',
      tech: 'Java, Hadoop, HBase, Cloudera, Ambari, Shell Script',
    },
    {
      emoji: '🌊',
      thumbClass: 'project-thumb--marine',
      title: '스마트 해양 교통안전 빅데이터 플랫폼',
      period: '2022.01 ~ 2023.12',
      description:
        '밀집도, 위험운항, 혼잡도 통계 분석 프로그램 개발 및 고도화. PostgreSQL 기반 DB 적재 프로그램 개발, 실시간 선박 데이터 RDB 적재, shp·geoJson 공간 데이터 처리.',
      tech: 'Java, Hadoop, PostgreSQL, MR, geoJson, shp',
    },
    {
      emoji: '✈️',
      thumbClass: 'project-thumb--aviation',
      title: '항공안전관리 빅데이터 플랫폼',
      period: '2021.05 ~ 2025.03',
      description:
        'Flink, Kafka 기반 스트림 처리 프레임워크 조사·테스트 및 보고서 작성. 연구 보고서·연구노트 작성, MR 기반 이상운항 탐지·접근 속도 이상 탐지 알고리즘 적용.',
      tech: 'Flink, Kafka, Hadoop, MR, Java',
    },
    {
      emoji: '⚠️',
      thumbClass: 'project-thumb--hazmat',
      title: '위험물질 운송 안전시스템',
      period: '2022 ~ 2023',
      description:
        'Storm 기반 위험물 코드별 월별 통계 프로그램 개발 및 산출물 작성.',
      tech: 'Storm, Java, Hadoop',
    },
    {
      emoji: '🖥️',
      thumbClass: 'project-thumb--hpc',
      title: 'HPC 가상화 프로젝트',
      period: '2023.11 ~ 2025.03',
      description:
        'VDP + K8s: 쿠버네티스 컨테이너 환경 기반 개발 및 기능 테스트. DLP + KVM: KVM 기반 가상 머신 생성·제어 기능 추가 개발 및 베타테스트.',
      tech: 'Kubernetes, KVM, Python, C++, PHP',
    },
  ],

  goals: [
    {
      title: '적응과 기여',
      description:
        '입사 후 팀의 개발 문화와 업무 프로세스에 빠르게 적응하여 맡은 업무를 성실히 수행하겠습니다.',
    },
    {
      title: '단기 목표',
      description:
        '기존 빅데이터·백엔드 개발 경험을 바탕으로 프로젝트에 즉시 기여하고, 팀원들과의 협업을 통해 기술 역량을 더욱 발전시키겠습니다.',
    },
    {
      title: '중장기 목표',
      description:
        '대용량 데이터 처리와 플랫폼 운영 분야의 전문성을 심화하고, 실시간·배치 데이터 파이프라인 구축 및 시스템 안정화에 핵심적인 역할을 담당하겠습니다.',
    },
  ],
};

/* ------------------------------------------------------------
   2. DOM 참조 & 상태
   ------------------------------------------------------------ */
const elements = {
  header: document.getElementById('site-header'),
  menuToggle: document.getElementById('menu-toggle'),
  siteNav: document.getElementById('site-nav'),
  navLinks: document.querySelectorAll('.nav-link'),
  scrollProgressBar: document.getElementById('scroll-progress-bar'),
  scrollTopBtn: document.getElementById('scroll-top'),
  aboutInfoList: document.getElementById('about-info-list'),
  aboutSliderTrack: document.getElementById('about-slider-track'),
  sliderPrev: document.getElementById('slider-prev'),
  sliderNext: document.getElementById('slider-next'),
  traitTabs: document.querySelectorAll('.trait-tab'),
  traitPanel: document.getElementById('trait-panel'),
  experienceList: document.getElementById('experience-list'),
  goalGrid: document.getElementById('goal-grid'),
  currentYear: document.getElementById('current-year'),
  sections: document.querySelectorAll('main .section'),
};

/** 슬라이더 현재 위치 (0부터 시작) */
let currentSlideIndex = 0;

/** 현재 선택된 성격 탭 ('strength' 또는 'weakness') */
let activeTraitTab = 'strength';

/* ------------------------------------------------------------
   3. 렌더링 함수
   ------------------------------------------------------------ */

/** About 기본 정보 표를 채웁니다. */
function renderAboutInfo() {
  const { aboutInfoList } = elements;
  if (!aboutInfoList) return;

  aboutInfoList.innerHTML = PROFILE_DATA.about
    .map(
      (item) => `
        <div class="info-row reveal">
          <dt class="info-label">${item.label}</dt>
          <dd class="info-value">${item.value}</dd>
        </div>
      `
    )
    .join('');
}

/** About 슬라이더 카드를 만듭니다. */
function renderSlider() {
  const { aboutSliderTrack } = elements;
  if (!aboutSliderTrack) return;

  aboutSliderTrack.innerHTML = PROFILE_DATA.slides
    .map(
      (slide) => `
        <article class="slider-slide slider-slide--${slide.type} reveal">
          <p class="slider-slide-label">${slide.label}</p>
          <h3 class="slider-slide-title">${slide.title}</h3>
          <p class="slider-slide-text">${slide.text}</p>
        </article>
      `
    )
    .join('');

  updateSliderPosition();
}

/** 장점/단점 탭 패널 내용을 갱신합니다. */
function renderTraitPanel() {
  const { traitPanel } = elements;
  if (!traitPanel) return;

  const items =
    activeTraitTab === 'strength'
      ? PROFILE_DATA.strengths
      : PROFILE_DATA.weaknesses;

  if (items.length === 1) {
    traitPanel.innerHTML = `
      <h3 class="trait-panel-title">${items[0].title}</h3>
      <p class="trait-panel-desc">${items[0].description}</p>
    `;
    return;
  }

  traitPanel.innerHTML = `
    <ul class="trait-panel-list">
      ${items
        .map(
          (item) => `
            <li class="trait-panel-item">
              <strong>${item.title}</strong>
              <p>${item.description}</p>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
}

/** Experience 섹션 카드를 만듭니다 (참고 사이트 Project 카드 스타일). */
function renderExperiences() {
  const { experienceList } = elements;
  if (!experienceList) return;

  experienceList.innerHTML = PROFILE_DATA.experiences
    .map(
      (exp) => `
        <article class="project-card reveal">
          <div class="project-visual">
            <div class="project-thumb ${exp.thumbClass}" aria-hidden="true">${exp.emoji}</div>
            <button class="project-detail-btn" type="button">자세히 보기</button>
          </div>
          <div class="project-info">
            <h3 class="project-title">${exp.title}</h3>
            <dl class="project-meta">
              <div class="project-meta-row">
                <dt class="project-meta-label">기간</dt>
                <dd class="project-meta-value">${exp.period}</dd>
              </div>
              <div class="project-meta-row">
                <dt class="project-meta-label">설명</dt>
                <dd class="project-meta-value">${exp.description}</dd>
              </div>
              <div class="project-meta-row">
                <dt class="project-meta-label">사용 기술</dt>
                <dd class="project-meta-value">${exp.tech}</dd>
              </div>
            </dl>
          </div>
        </article>
      `
    )
    .join('');

  bindDetailButtons();
}

/** Goals 카드 그리드를 만듭니다. */
function renderGoals() {
  const { goalGrid } = elements;
  if (!goalGrid) return;

  goalGrid.innerHTML = PROFILE_DATA.goals
    .map(
      (goal, index) => `
        <article class="goal-card reveal">
          <span class="goal-card-step">${index + 1}</span>
          <h3 class="goal-card-title">${goal.title}</h3>
          <p class="goal-card-desc">${goal.description}</p>
        </article>
      `
    )
    .join('');
}

function renderCurrentYear() {
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }
}

function renderProfileContent() {
  renderAboutInfo();
  renderSlider();
  renderTraitPanel();
  renderExperiences();
  renderGoals();
  renderCurrentYear();
}

/* ------------------------------------------------------------
   4. 슬라이더 동작
   ------------------------------------------------------------ */

/** 슬라이더 위치를 현재 인덱스에 맞게 이동합니다. */
function updateSliderPosition() {
  const { aboutSliderTrack, sliderPrev, sliderNext } = elements;
  if (!aboutSliderTrack) return;

  const totalSlides = PROFILE_DATA.slides.length;
  aboutSliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  if (sliderPrev) sliderPrev.disabled = currentSlideIndex === 0;
  if (sliderNext) sliderNext.disabled = currentSlideIndex >= totalSlides - 1;
}

function goToPrevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex -= 1;
    updateSliderPosition();
  }
}

function goToNextSlide() {
  if (currentSlideIndex < PROFILE_DATA.slides.length - 1) {
    currentSlideIndex += 1;
    updateSliderPosition();
  }
}

/* ------------------------------------------------------------
   5. 탭 & 버튼 이벤트
   ------------------------------------------------------------ */

/** 장점/단점 탭을 전환합니다. */
function switchTraitTab(tabName) {
  activeTraitTab = tabName;

  elements.traitTabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  if (elements.traitPanel) {
    const activeTab = document.querySelector(`.trait-tab[data-tab="${tabName}"]`);
    if (activeTab) {
      elements.traitPanel.setAttribute('aria-labelledby', activeTab.id);
    }
  }

  renderTraitPanel();
}

/** '자세히 보기' 버튼 클릭 시 설명 영역으로 스크롤 */
function bindDetailButtons() {
  document.querySelectorAll('.project-detail-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      const info = card?.querySelector('.project-info');
      if (info) {
        info.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

/* ------------------------------------------------------------
   6. 내비게이션 & 스크롤
   ------------------------------------------------------------ */

function toggleMobileMenu(forceOpen) {
  const { menuToggle, siteNav } = elements;
  if (!menuToggle || !siteNav) return;

  const isOpen =
    typeof forceOpen === 'boolean'
      ? forceOpen
      : menuToggle.getAttribute('aria-expanded') !== 'true';

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  siteNav.classList.toggle('is-open', isOpen);
}

function updateScrollState() {
  const { navLinks, sections, scrollProgressBar, scrollTopBtn } = elements;
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  if (scrollProgressBar) {
    scrollProgressBar.style.width = `${progress}%`;
  }

  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('is-visible', scrollY > 400);
  }

  let activeSectionId = 'hero';
  const viewportMiddle = scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (viewportMiddle >= top && viewportMiddle < bottom) {
      activeSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.dataset.section === activeSectionId);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   7. 등장 애니메이션
   ------------------------------------------------------------ */
function initRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function observeNewRevealElements() {
  initRevealAnimation();
}

/* ------------------------------------------------------------
   8. 유틸 & 이벤트 바인딩
   ------------------------------------------------------------ */
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function bindEvents() {
  const { menuToggle, navLinks, sliderPrev, sliderNext, traitTabs, scrollTopBtn } = elements;

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMobileMenu());
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  if (sliderPrev) sliderPrev.addEventListener('click', goToPrevSlide);
  if (sliderNext) sliderNext.addEventListener('click', goToNextSlide);

  traitTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchTraitTab(tab.dataset.tab));
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', scrollToTop);
  }

  window.addEventListener('scroll', throttle(updateScrollState, 80));
  window.addEventListener('resize', throttle(updateScrollState, 120));
}

function init() {
  renderProfileContent();
  bindEvents();
  updateScrollState();
  observeNewRevealElements();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
