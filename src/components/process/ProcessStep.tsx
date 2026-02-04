'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { startTransition, useEffect, useRef, useState } from 'react';
import { useProcessType } from './ProcessContext';

export default function ProcessStep() {
  const t = useTranslations('ProcessSection' as any) as any;
  const { processType } = useProcessType();
  const [expandedStep, setExpandedStep] = useState<number>(1);
  const prevProcessTypeRef = useRef(processType);

  // Reset to step 1 when processType changes
  useEffect(() => {
    if (prevProcessTypeRef.current !== processType) {
      prevProcessTypeRef.current = processType;
      // Use startTransition to mark this as a non-urgent update
      startTransition(() => {
        setExpandedStep(1);
      });
    }
  }, [processType]);

  const steps = processType === 'kol'
    ? [
        { key: 'step1', title: t('steps.kol.step1.title') },
        { key: 'step2', title: t('steps.kol.step2.title') },
        { key: 'step3', title: t('steps.kol.step3.title') },
        { key: 'step4', title: t('steps.kol.step4.title') },
        { key: 'step5', title: t('steps.kol.step5.title') },
        { key: 'step6', title: t('steps.kol.step6.title') },
        { key: 'step7', title: t('steps.kol.step7.title') },
      ]
    : [
        { key: 'step1', title: t('steps.business.step1.title') },
        { key: 'step2', title: t('steps.business.step2.title') },
        { key: 'step3', title: t('steps.business.step3.title') },
        { key: 'step4', title: t('steps.business.step4.title') },
        { key: 'step5', title: t('steps.business.step5.title') },
        { key: 'step6', title: t('steps.business.step6.title') },
        { key: 'step7', title: t('steps.business.step7.title') },
      ];

  const toggleStep = (stepIndex: number) => {
    if (expandedStep !== stepIndex) {
      setExpandedStep(stepIndex);
    }
  };
  return (
    <>
      <div className="relative col-span-3">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isExpanded = expandedStep === stepNumber;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.key} className="relative mb-6 pl-8 md:mb-8 md:pl-10">
              {/* Line segment */}
              {!isLast && (
                <motion.div
                  className={`absolute top-3 left-2 w-px md:top-3.5 ${isExpanded
                    ? 'bg-linear-to-b from-[#9C20FC] to-[#FCB036]'
                    : ''
                  }`}
                  style={{
                    height: 'calc(100% + 1.5rem)',
                    backgroundColor: isExpanded ? undefined : '#AEADAF',
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Step Node */}
              <AnimatePresence>
                {isExpanded
                  ? (
                      <motion.div
                        key={`active-${stepNumber}`}
                        className="absolute top-3 left-[-8px] -translate-y-1/2 md:top-3.5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                      >
                        <Image
                          src="/assets/icons/node-active.svg"
                          alt="Active step"
                          width={32}
                          height={32}
                        />
                      </motion.div>
                    )
                  : (
                      <motion.div
                        key={`inactive-${stepNumber}`}
                        className="absolute top-3 left-0 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-[#AEADAF] md:top-3.5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                      />
                    )}
              </AnimatePresence>

              {/* Step Content */}

              <div className="rounded-lg">
                <div className="flex items-center justify-between">

                  <motion.h3
                    className={`text-base leading-6 font-medium md:text-lg md:leading-7 ${isExpanded
                      ? 'bg-linear-to-r from-[#9C20FC] to-[#FCB036] bg-clip-text text-transparent'
                      : 'text-gray-700'
                    }`}
                    animate={{
                      color: isExpanded ? undefined : '#374151',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <button
                    type="button"
                    onClick={() => toggleStep(stepNumber)}
                    disabled={isExpanded}
                    className={`ml-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full md:ml-4 md:h-8 md:w-8 ${isExpanded
                      ? 'cursor-not-allowed opacity-50'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isExpanded
                      ? (
                          <Image
                            src="/assets/icons/minus.svg"
                            alt="Collapse"
                            width={32}
                            height={32}
                          />
                        )
                      : (
                          <Image
                            src="/assets/icons/plus.svg"
                            alt="Expand"
                            width={32}
                            height={32}
                          />
                        )}
                  </button>
                </div>

                <AnimatePresence>
                  {isExpanded && (() => {
                    const stepKey = `step${stepNumber}`;
                    const detailsPath = `steps.${processType}.${stepKey}.details`;
                    const brandClarify = t(`${detailsPath}.brand_clarify`, { defaultValue: '' });
                    const hasDetails = brandClarify !== '';

                    if (!hasDetails) {
                      return null;
                    }

                    return (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-2 pb-4 text-sm text-text-secondary md:pb-6">
                          <motion.p
                            className="font-medium"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {brandClarify}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                          >
                            {t(`${detailsPath}.goals`, { defaultValue: '' })}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            {t(`${detailsPath}.kpi`, { defaultValue: '' })}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25, duration: 0.3 }}
                          >
                            {t(`${detailsPath}.kol_type`, { defaultValue: '' })}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                          >
                            {t(`${detailsPath}.check`, { defaultValue: '' })}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35, duration: 0.3 }}
                          >
                            {t(`${detailsPath}.output`, { defaultValue: '' })}
                          </motion.p>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
